const { validateUserId, ExistenceError } = require('com')
const { User, Chat } = require('../data/models')

/**
 * retrive the chats of the user
 * @param {string} userId the user identity
 */

function retrieveChats(userId) {
   validateUserId(userId)

   return Promise.all([User.findById(userId).lean(), Chat.find({ users: userId }).populate({
      path: 'users',
      select: 'name'
   }).populate({
      path: 'messages',
      populate: {
         path: 'user',
         select: 'name'
      }
   }).lean()])
      .then(([users, chats]) => {
         if (!users) throw new ExistenceError(`user with id ${userId} not found`)
         if (!chats) throw new ExistenceError(`chat with id ${userId} not found`)
         
         chats.forEach((chat) => {
            if (chat._id) {
               chat.id = chat._id.toString()
               delete chat._id
               delete chat.__v

            }
            chat.messages.forEach((message) => {
               message.id = message._id.toString()
               delete message._id
               message.user = message.user._doc
               if (message.user._id) {
                  message.user.id = message.user._id.toString()

                  delete message.user._id
               }
            })
            chat.users.forEach((user)=>{
               if(user._id) {
               user.id = user._id.toString()
               delete user._id
               }
            })
          
         })


         return chats

      })

}
module.exports = retrieveChats
