const { validateUserId, validateParentId, ExistenceError } = require('com');
const { User, Nanny, Parent } = require('../data/models')


/**
* Toggles favorite of a specific parent
* 
* @param {string} userId The userId
* @param {string} parentId The parent identifier that the user want to save to favorites
*/

function toggleFavParent(userId, parentId) {
    validateUserId(userId)
    validateParentId(parentId)


    return Promise.all([User.findById(userId), Nanny.findOne({ user: userId }), Parent.findById(parentId)])
        .then(([user, nanny, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!nanny) throw new ExistenceError(`nanny related to user with id ${userId} not found`)

            if (!parent) throw new ExistenceError(`parent with id ${parentId} not found`)

            const favs = nanny.favs

            const index = favs.indexOf(parentId)

            if (index < 0)
                favs.push(parentId)
            else
                favs.splice(index, 1)

            return nanny.save()
        })
}

module.exports = toggleFavParent