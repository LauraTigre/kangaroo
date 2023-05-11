function validateUserId(userId){
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
}
module.exports= validateUserId