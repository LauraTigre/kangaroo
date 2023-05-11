function validateUserIdTo(userIdTo){
    if (typeof userIdTo !== 'string') throw new TypeError('userIdTo is not a string')
}
module.exports= validateUserIdTo