function validateNewSaturdayEveningSelected (saturdayNewEveningSelected){
    if (typeof saturdayNewEveningSelected !== 'boolean') throw new TypeError('saturdayNewEveningSelected is not a boolean')
}
module.exports= validateNewSaturdayEveningSelected;