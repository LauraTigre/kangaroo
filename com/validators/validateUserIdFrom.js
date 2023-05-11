function validateUserIdFrom(userIdFrom){
    if (typeof userIdFrom !== 'string') throw new TypeError('userIdFrom is not a string')
}
module.exports= validateUserIdFrom