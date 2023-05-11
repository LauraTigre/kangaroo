function validateText(text){
    if (typeof text !== 'string') throw new TypeError('text is not a string')
}
module.exports= validateText