const { User, Nanny, Chat } = require('../data/models')
const { validateUserId, ExistenceError } = require('com')
/**
 *retrieve favorits parents
 * 
 * @param {string} userId The user who owns the favorites list
 */
function retrieveFavParents(userId) {
    validateUserId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Nanny.findOne({ user: userId }).populate({
            path: 'favs',
            populate: {
                path: 'user'
            }
        }).lean()
    ])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`User ${userId} not found`)

            if (!nanny) throw new ExistenceError(`Nanny related to user with id ${userId} not found`)

            const parents = nanny.favs.map(parent => {
                const _parent = {}
                _parent.user={}
                _parent.id = parent._id.toString()
                _parent.fav = true

                _parent.name = parent.user.name
                _parent.user.id = parent.user._id.toString()
                _parent.photo = parent.photo

                _parent.availabilities = parent.availabilities

                parent.availabilities.forEach(availability => {
                    availability.id = availability._id.toString()
                    delete availability._id
                })

                _parent.kids = parent.kids

                parent.kids.forEach(kid => {
                    kid.id = kid._id.toString()
                    delete kid._id
                })
                _parent.email = parent.user.email

                return _parent
            })
            const parentIds = parents.map(parent => parent.user.id)
             return Chat.find({
                $and:[
                    {users : userId},
                    {users : {$in : parentIds}}
                ]
             }).lean()

             .then(chats => {
               chats.forEach(chat => {
                const parentUserId = chat.users.find(_userId => _userId.toString() !== userId)

                const parent = parents.find(parent => parent.user.id === parentUserId.toString())

                parent.chat = chat._id.toString()
               })
                return parents
            })
        })


}
module.exports = retrieveFavParents