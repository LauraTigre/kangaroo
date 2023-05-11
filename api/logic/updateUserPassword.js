const { User } = require('../data/models')

const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordConfirm, CoherenceError, ExistenceError, AuthError } = require('com')
const bcrypt = require('bcryptjs')

/**
* Update password the user wants to updated
* 
* @param {string} userId The userId
* @param {string} password password that the user have
* @param {string} newPassword new password that the user wants to update
* @param {string} newPasswordConfirm new password confirm that the user have to repeat to be changed
**/

function updateUserPassword(userId, password, newPassword, newPasswordConfirm) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)
    if (password === newPassword) {
        throw new CoherenceError('password and new password are equal')
    }

    if (newPassword !== newPasswordConfirm) {
        throw new CoherenceError('Passwords do not match')
    }

    return User.findById(userId)
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return bcrypt.compare(password, user.password)
                .then(match => {
                    if (!match) throw new AuthError('wrong credentials')
                    return bcrypt.hash(newPassword, 10)
                })
                .then(hash => {

                    user.password = hash

                    return user.save()

                })
        })
}

module.exports = updateUserPassword