function validateNewSaturdayAfternoonSelected (saturdayNewAfternoonSelected){
    if (typeof saturdayNewAfternoonSelected !== 'boolean') throw new TypeError('saturdayNewAfternoonSelected is not a boolean')
}
module.exports= validateNewSaturdayAfternoonSelected;