const { User, Nanny } = require('../data/models')

const { validateUserId, validateNewPrice, ExistenceError } = require('com')
/**
* Update price that nanny wants to be updated
* 
* @param {string} userId The userId
* @param {nummber} newPrice The price that the user wants to be updated
**/
function updatePrice(userId, newPrice) {
    validateUserId(userId)
    validateNewPrice(newPrice)


    return Promise.all([User.findById(userId).lean(), Nanny.findOne({ user: userId })])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!nanny) throw new ExistenceError(`nanny with id ${userId} not found`)
            nanny.price = newPrice
            return nanny.save()
        })
}
module.exports = updatePrice