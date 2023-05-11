function validateNewExtras(newExtras){
    if (typeof newExtras !== 'string') throw new TypeError('newExtras is not a string')
}
module.exports= validateNewExtras