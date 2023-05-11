const { User, Message, Chat } = require('../data/models')
const { validateUserIdFrom, validateUserIdTo, validateMessage, CoherenceError, ExistenceError } = require('com')


function chat(userIdFrom, userIdTo, message) {
    validateUserIdFrom(userIdFrom)
    validateUserIdTo(userIdTo)
    validateMessage(message)

    return Promise.all([
        User.findById( userIdFrom).lean(),
        User.findById( userIdTo).lean(),
        Chat.findOne({ users: { $all: [userIdFrom, userIdTo] } })
    ])
        .then(([userFrom, userTo, chat]) => {
        
            if (!userFrom) throw new ExistenceError(`userFrom with id ${userIdFrom} not found`)
            if (!userTo) throw new ExistenceError(`userTo with id ${userIdTo} not found`)
            if (userFrom.role === userTo.role) throw new CoherenceError(`userFrom role is equal to userTo role`)
            if (!chat) chat = new Chat({ users: [userIdFrom, userIdTo] })

            const newMessage = new Message({ user: userIdFrom, message })

            chat.messages.push(newMessage)
           
            userFrom.id= userFrom._id.toString()
            delete userFrom._id

            userTo.id= userTo._id.toString()
            delete userTo._id
            
            

            return chat.save()
        })
}

module.exports = chat