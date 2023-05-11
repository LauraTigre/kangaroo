function validatePriceFrom(priceFrom){

    if (typeof priceFrom !== 'number') throw new TypeError('priceFrom is not a number')
    if (priceFrom <= 0) throw new Error('priceFrom must be greater than 0')

}
module.exports= validatePriceFrom