function validateUserNannyId(nannyId){
    if (typeof nannyId !== 'string') throw new TypeError('userId is not a string')
}
module.exports= validateUserNannyId