const { User, Nanny } = require('../data/models')

const { validateUserId, validateNewExperience, ExistenceError } = require('com')
/**
* Update experience that nanny wants to be updated
* 
* @param {string} userId The userId
* @param {nummber} newExperience The experience that the user wants to be updated
**/
function updateExperience(userId, newExperience) {
    validateUserId(userId)
    validateNewExperience(newExperience)


    return Promise.all([User.findById(userId).lean(), Nanny.findOne({ user: userId })])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!nanny) throw new ExistenceError(`nanny with id ${userId} not found`)
            nanny.experience = newExperience
            return nanny.save()
        })
}
module.exports = updateExperience