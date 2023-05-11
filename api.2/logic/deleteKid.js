const { validateUserId,validateKidId,ExistenceError} = require('com')
const { User,Parent } = require('../data/models')
/**
 * Delete kid in the database
 * 
 * @param {string} userId The user 
 * @param {string} kidId The kid that i want to quit
 */
function deleteKid(userId,kidId) {
    validateUserId(userId)
    validateKidId(kidId)

    return Promise.all([User.findById(userId).lean() , Parent.findOne({user: userId})])
    .then(([user,parent]) => {
        if (!user) throw new ExistenceError(`user with id ${userId} not found`)
        if(!parent)throw new ExistenceError(`parent with user ${userId} not found`)

        const index = parent.kids.findIndex(kid=> kid._id.toString() === kidId)
        if(index < 0) throw new ExistenceError(`kids with id ${kidId} not found`)
        parent.kids.splice(index, 1)
       
    
         return parent.save()
    })
}

module.exports = deleteKid
