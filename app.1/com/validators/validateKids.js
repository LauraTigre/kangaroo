function validateKids(kids){
    if (typeof kids !== 'string') throw new TypeError('kids is not a string')
}
module.exports= validateKids