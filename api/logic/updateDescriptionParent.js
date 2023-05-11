const { User, Parent } = require('../data/models')

const { validateUserId, validateNewDescription, ExistenceError, } = require('com')
/**
* Update description that nanny wants to be updated
* 
* @param {string} userId The userId
* @param {string} newDescription The description that the user wants to be updated
**/

function updateDescriptionParent(userId, newDescription) {
    validateUserId(userId)
    validateNewDescription(newDescription)


    return Promise.all([User.findById(userId), Parent.findOne({ user: userId })])
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
          if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)
            parent.description = newDescription
            return parent.save()
        })

}
module.exports = updateDescriptionParent