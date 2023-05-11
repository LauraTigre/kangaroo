const { validateUserId, ExistenceError } = require('com')
const { User, Parent} = require('../data/models')
/**
 * retrive the kids of the user
 * @param {string} userId 
 * @param {*}  
 * @returns 
 */

function retrieveKids(userId) {
    validateUserId(userId)

    return Promise.all([User.findById(userId).lean(), Parent.findOne({ user: userId })])
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
            if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)
            
               const kids = parent.kids
            
            return kids

        })
}

module.exports = retrieveKids

