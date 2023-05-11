const { validateUserId, ExistenceError } = require('com')
const { User,Parent, Nanny } = require('../data/models')
/**
 * 
 * @param {string} userId 
 * @param {*}  
 * @returns 
 */

function retrieveParents(userId) {
    validateUserId(userId)
   
    return User.findById(userId).lean()
    .then(user => {
        if (!user) throw new ExistenceError(`user with id ${userId} not found`)

        if (user.role === 'nanny')
            
            return Nanny.findOne({ user: userId }).lean()
                .then(nanny => {
                    user.city = nanny.city

                    // sanitize
                    delete user._id
                    delete user.password
                    delete user.__v

                    return user
                })
    
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            return Parent.find({city: user.city}).populate('user', '-password -__v').select('-__v').lean()

            .then (parents => {

                parents.forEach(parent => {

                    if(parent._id){
                    parent.id= parent._id.toString()
                    delete parent._id
                    delete parent.__v
                    }
                    if(parent.user._id){
                        parent.user.id= parent.user._id.toString()
                        delete parent.user._id
                    }
                    parent.availabilities.forEach(availability => {
                        availability.id= availability._id.toString()
                        delete availability._id
                     })
                     parent.kids.forEach(kid => {
                        kid.id= kid._id.toString()
                        delete kid._id
                     })
                    
                })
                return parents
            })
            
        })

    })
}

module.exports = retrieveParents

