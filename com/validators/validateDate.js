function validatedate(date){

    if (!(date instanceof Date)) throw new TypeError('date is not a date')

}
module.exports= validatedate