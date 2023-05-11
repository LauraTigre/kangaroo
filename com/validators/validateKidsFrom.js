function validateKidsFrom(kidsFrom){
    if (typeof kidsFrom !== 'number') throw new TypeError('kidsFrom is not a number')
}
module.exports= validateKidsFrom