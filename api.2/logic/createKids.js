const { User, Parent, Kid } = require('../data/models')

const { validateUserId, validateNewName, validateNewDateOfBirth, ExistenceError, } = require('com')
/**
 * Creates a new kid in the database
 * 
 * @param {string} userId The user 
 * @param {string} newName The name of the new kid that i want to add
 * @param {Date} newDateOfBirth The date of birth the new kid that i want to add
 */

function createKids(userId, newName, newDateOfBirth) {
    validateUserId(userId)
    validateNewName(newName)
    validateNewDateOfBirth(newDateOfBirth)


    return Promise.all([User.findById(userId).lean(), Parent.findOne({ user: userId })])
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)
            const addKid = new Kid({
                name: newName,
                dateOfBirth: new Date(newDateOfBirth)
            })

            parent.kids.push(addKid)

            return parent.save()

        })
}
module.exports = createKids