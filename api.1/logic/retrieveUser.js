const { validateUserId, ExistenceError } = require('com')
const { User, Parent, Nanny } = require('../data/models')

function retrieveUser(userId) {
    validateUserId(userId)


    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.role === 'parent')
                return Parent.findOne({ user: userId }).lean()
                    .then(parent => {
                        user.city = parent.city

                        // sanitize
                        delete user._id
                        delete user.password
                        delete user.__v
                        
                        return user
                    })
            else
                return Nanny.findOne({ user: userId }).lean()
                    .then(nanny => {
                        user.city = nanny.city

                        // sanitize
                        delete user._id
                        delete user.password
                        delete user.__v

                        return user
                    })
        })
}

module.exports = retrieveUser