function validateKidsTo(kidsTo){
    if (typeof kidsTo !== 'number') throw new TypeError('kidsTo is not a number')
}
module.exports= validateKidsTo