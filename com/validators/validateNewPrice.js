function validateNewPrice(newPrice){
    if (typeof newPrice !== 'number') throw new TypeError('newPrice is not a number')

}
module.exports= validateNewPrice