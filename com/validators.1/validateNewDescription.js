function validateNewDescription(newDescription){
    if (typeof newDescription !== 'string') throw new TypeError('newDescription is not a string')
}
module.exports= validateNewDescription