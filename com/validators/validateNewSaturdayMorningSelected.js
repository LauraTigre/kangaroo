function validateNewSaturdayMorningSelected (saturdayNewMorningSelected){
    if (typeof saturdayNewMorningSelected !== 'boolean') throw new TypeError('saturdayNewMorningSelected is not a boolean')
}
module.exports= validateNewSaturdayMorningSelected;