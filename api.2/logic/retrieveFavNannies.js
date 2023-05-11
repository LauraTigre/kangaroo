const { User, Parent, Chat } = require('../data/models')
const { validateUserId, ExistenceError } = require('com')

/**
 *retrieve favorits nanny
 * 
 * @param {string} userId The user who owns the favorites list
 */

function retrieveFavNannies(userId) {
    validateUserId(userId)


    return Promise.all([
        User.findById(userId).lean,
        Parent.findOne({ user: userId }).populate({
            path: 'favs',
            populate: {
                path: 'user'
            }
        }).lean()
    ])
        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!parent) throw new ExistenceError(`Parent related to user with id ${userId} not found`)
            const nannies = parent.favs.map(nanny => {
                const _nanny = {}
                _nanny.user = {}

                _nanny.id = nanny._id.toString()
                _nanny.user.id = nanny.user._id.toString()
                _nanny.fav = true

                _nanny.name = nanny.user.name
                _nanny.email = nanny.user.email

                _nanny.availabilities = nanny.availabilities


                nanny.availabilities.forEach(availability => {
                    availability.id = availability._id.toString()
                    delete availability._id
                })
                _nanny.photo = nanny.photo

                _nanny.experience = nanny.experience

                delete nanny.user._id

                return _nanny
            })

            const nannyIds = nannies.map(nanny => nanny.user.id)

            return Chat.find({
                $and: [
                    { users: userId },
                    { users: { $in: nannyIds } }
                ]
            }
            ).lean()
                .then(chats => {
                    // nannies.forEach(nanny => {
                    //     const nannyUserId = nanny.user.id

                    //     const chat = chats.find(chat => chat.users.map(userId => userId.toString())

                    //     const chat = chats.find(chat => chat.users.map(userId => userId.toString()).includes(nanny.user.id))
                    //     if (chat) {
                    //         nanny.chatId = chat._id.toString()
                    //     }
                    // })

                    chats.forEach(chat => {
                        const nannyUserId = chat.users.find(_userId => _userId.toString() !== userId)

                        const nanny = nannies.find(nanny => nanny.user.id === nannyUserId.toString())

                        nanny.chat = chat._id.toString() 
                    })

                    return nannies
                })

        })
}
module.exports = retrieveFavNannies