function validateMessage(message){
    if (typeof message !== 'string') throw new TypeError('message is not a string')
}
module.exports= validateMessage