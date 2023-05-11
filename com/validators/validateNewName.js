function validateNewName(newName){
    if (typeof newName !== 'string') throw new TypeError('newName is not a string')
}
module.exports= validateNewName