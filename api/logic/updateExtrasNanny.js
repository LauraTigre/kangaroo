const { User, Nanny } = require('../data/models')

const { validateUserId, validateNewExtras, ExistenceError, } = require('com')
/**
* Update extras that nanny wants to be updated
* 
* @param {string} userId The userId
* @param {string} newExtras The extras that the user wants to be updated
**/

function updateExtrasNanny(userId, newExtras) {
    validateUserId(userId)
    validateNewExtras(newExtras)


    return Promise.all([User.findById(userId).lean(), Nanny.findOne({ user: userId })])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!nanny) throw new ExistenceError(`nanny with id ${userId} not found`)
            nanny.extras = newExtras
            return nanny.save()


        })

}
module.exports = updateExtrasNanny