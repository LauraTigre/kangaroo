function validatePrice(price){

    if (typeof price !== 'number') throw new TypeError('price is not a number')
    if (price <= 0) throw new Error('price must be greater than 0')

}
module.exports= validatePrice