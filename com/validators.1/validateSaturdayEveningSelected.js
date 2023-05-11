function validateSaturdayEveningSelected (saturdayEveningSelected){
    if (typeof saturdayEveningSelected !== 'boolean') throw new TypeError('saturdayEveningSelected is not a boolean')
}
module.exports= validateSaturdayEveningSelected;