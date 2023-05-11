function validateKidId(kidId){
    if (typeof kidId !== 'string') throw new TypeError('kidId is not a string')
}
module.exports= validateKidId