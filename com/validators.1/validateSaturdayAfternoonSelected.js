function validateSaturdayAfternoonSelected (saturdayAfternoonSelected){
    if (typeof saturdayAfternoonSelected !== 'boolean') throw new TypeError('saturdayAfternoonSelected is not a boolean')
}
module.exports= validateSaturdayAfternoonSelected;