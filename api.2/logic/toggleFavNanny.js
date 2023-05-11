const { validateUserId, validateNannyId, ExistenceError } = require('com');
const { User, Parent,Nanny } = require('../data/models')


/**
* Toggles favorite of a specific nanny
* 
* @param {string} userId The userId
* @param {string} nannyId The nanny identifier that the user want to save to favorites
*/

function toggleFavNanny(userId, nannyId) {
    validateUserId(userId)
    validateNannyId(nannyId)


    return Promise.all([User.findById(userId),Parent.findOne({user:userId}) ,Nanny.findById(nannyId)])
        .then(([user, parent,nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!parent) throw new ExistenceError(`parent related to user with id ${userId} not found`)
            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)

            const favs = parent.favs

            const index = favs.indexOf(nannyId)

            if (index < 0)
                favs.push(nannyId)
            else
                favs.splice(index, 1)

            return parent.save()


        })

}
module.exports = toggleFavNanny