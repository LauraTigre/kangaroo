function validateNewTuesdayAfternoonSelected (tuesdayNewAfternoonSelected){
    if (typeof tuesdayNewAfternoonSelected !== 'boolean') throw new TypeError('tuesdayNewAfternoonSelected is not a boolean')
}
module.exports= validateNewTuesdayAfternoonSelected;