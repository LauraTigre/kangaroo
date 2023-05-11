function validateChatId(chatId){
    if (typeof chatId !== 'string') throw new TypeError('chatId is not a string')
}
module.exports= validateChatId