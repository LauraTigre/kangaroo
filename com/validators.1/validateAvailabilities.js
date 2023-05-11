function validateAvailabilities(availabilities){
    if (typeof availabilities !== 'string') throw new TypeError('availabilities is not a string')
}
module.exports= validateAvailabilities