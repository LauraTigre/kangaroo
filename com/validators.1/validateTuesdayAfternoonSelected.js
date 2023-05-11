function validateTuesdayAfternoonSelected (tuesdayAfternoonSelected){
    if (typeof tuesdayAfternoonSelected !== 'boolean') throw new TypeError('tuesdayAfternoonSelected is not a boolean')
}
module.exports= validateTuesdayAfternoonSelected;