const { validateUserId, validateUserParentId, ExistenceError } = require('com')
const { User, Parent } = require('../data/models')

function retrieveParentProfile(userId, parentId) {

    validateUserId(userId)
    validateUserParentId(parentId)

    return User.findById(userId).lean()
    .then(user => {
        if (!user)throw new ExistenceError(`user with id ${userId} not found`)

        if(user.role !== 'nanny')throw new Error('invalid user role')

        return Parent.findById(parentId).populate('user', 'name').select('-__v').lean()
        .then(parent =>{
            if(!parent)throw new ExistenceError(`parent with id ${parentId} not found`)
             // sanitize
             parent.id= parent._id.toString()
             parent.user.id= parent.user._id.toString()
             parent.availabilities.forEach(availability => {
                availability.id= availability._id.toString()
                delete availability._id
             })
             parent.kids.forEach(kid => { 
                kid.id= kid._id.toString()
                delete kid._id
             })
             delete parent._id
             delete parent.user._id
             

             return parent

        })
    })
}
module.exports = retrieveParentProfile