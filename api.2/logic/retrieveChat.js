const { validateUserId,validateChatId,ExistenceError } = require('com')
const { User, Chat} = require('../data/models')

/**
 * retrive the chats of the user
 * @param {string} userId the user identity
 * @param {string} chatId the chat identity
 */

function retrieveChat(userId, chatId) {
   validateUserId(userId)
   validateChatId(chatId)

   return Promise.all([User.findById(userId).lean(), Chat.findById(chatId).populate({
      path: 'users',
      select:'name'
  }).populate({
   path:'messages',
   populate:{
      path: 'user',
      select:'name'
   }
  }).lean()])
      .then(([user, chat]) => {
         if (!user) throw new ExistenceError(`user with id ${userId} not found`)
         if (!chat) throw new ExistenceError(`chat with id ${chatId} not found`)

         if (chat._id) {
            chat.id = chat._id.toString()
            delete chat._id
            delete chat.__v

         }
         chat.messages.forEach((message) => {
            message.id = message._id.toString()
            message.user = message.user._doc
            if(message.user._id){
               message.user.id= message.user._id.toString()

               delete message.user._id
            }
            delete message._id
         })
         chat.users.forEach((user)=>{
            user.id = user._id.toString()
            delete user._id
         })


         return chat

      })

}
module.exports = retrieveChat
