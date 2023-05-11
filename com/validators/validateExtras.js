function validateExtras (extras){
    if (typeof extras !== 'string') throw new TypeError('extras is not a string')
}
module.exports= validateExtras