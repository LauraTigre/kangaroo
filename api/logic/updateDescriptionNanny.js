const { User, Nanny } = require('../data/models')

const { validateUserId, validateNewDescription, ExistenceError, } = require('com')

/**
* Update description that nanny wants to be updated
* 
* @param {string} userId The userId
* @param {string} newDescription The description that the user wants to be updated
**/

function updateDescriptionNanny(userId, newDescription) {
    validateUserId(userId)
    validateNewDescription(newDescription)


    return Promise.all([User.findById(userId), Nanny.findOne({ user: userId })])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!nanny) throw new ExistenceError(`nanny with id ${userId} not found`)
            nanny.description = newDescription
            return nanny.save()
        })

}
module.exports = updateDescriptionNanny