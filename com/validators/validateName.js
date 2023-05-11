function validateName(name){
    if (typeof name !== 'string') throw new TypeError('name is not a string')
}
module.exports= validateName