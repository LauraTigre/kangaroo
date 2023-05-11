const {User} = require('../data/models')

const { validateUserId,validatePassword, validateNewEmail ,ExistenceError, AuthError} = require('com')

/**
* Update email the user wants to be updated
* 
* @param {string} userId The userId
* @param {string} password password that the user needs to updated
* @param {string} newEmail new email that the user needs to update

**/
function updateUserEmail(userId, password, newEmail) {
    validateUserId(userId)
    validatePassword(password)
    validateNewEmail(newEmail)

    return User.findById(userId)
    .then(user => {
        if (!user) throw new ExistenceError('user not found')
        if (user.password !== password) throw new AuthError('wrong credentials')
        user.email = newEmail
        return user.save()
    })

}
module.exports = updateUserEmail