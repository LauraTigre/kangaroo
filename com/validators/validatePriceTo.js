function validatePriceTo(priceTovalidatePriceTo){

    if (typeof priceTovalidatePriceTo !== 'number') throw new TypeError('priceTovalidatePriceTo is not a number')
    if (priceTovalidatePriceTo <= 0) throw new Error('priceTovalidatePriceTo must be greater than 0')

}
module.exports= validatePriceTo