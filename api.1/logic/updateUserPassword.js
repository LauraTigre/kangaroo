const {User} = require('../data/models')

const { validateUserId,validatePassword, validateNewPassword,validateNewPasswordConfirm, CoherenceError ,ExistenceError,AuthError} = require('com')

function updateUserPassword(userId, password, newPassword, newPasswordConfirm){
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)
    if(password === newPassword){
        throw new CoherenceError(400, 'password and new password are equal')
    }

    if(newPassword!== newPasswordConfirm){
        throw new CoherenceError(400, 'Passwords do not match')
    }

    return User.findById(userId)
    .then(user => {
        if(!user) throw new ExistenceError(`user with id ${userId} not found`)

        if(user.password!== password) throw new AuthError('wrong credentials')

        user.password = newPassword

        return user.save()
        
    })
}

module.exports = updateUserPassword