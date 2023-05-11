function validateSaturdayMorningSelected (saturdayMorningSelected){
    if (typeof saturdayMorningSelected !== 'boolean') throw new TypeError('saturdayMorningSelected is not a boolean')
}
module.exports= validateSaturdayMorningSelected;