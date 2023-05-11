const { validateUserId, validatePassword,ExistenceError, AuthError } = require('com')
const { User,Parent, Chat } = require('../data/models')
const {Types: {ObjectId}}= require('mongoose')
/**
* Delete an user and his role
* 
* @param {string} userId The userId
* @param {string} password The password taht the user 
**/

function unregisterParent(userId, password) {
    validateUserId(userId)
    validatePassword(password)

    return User.findById(userId)
    .then(user => {
        if (!user) throw new ExistenceError(`user with id ${userId} not found`)
        if (user.password!== password) throw new AuthError('wrong credentials')

        return Parent.deleteOne({'user': userId})
        .then(()=>{
            return Chat.deleteMany({users:userId})
        })

        .then(() => {return User.deleteOne({ _id: new ObjectId(userId) })})
    
    })
}

module.exports = unregisterParent
