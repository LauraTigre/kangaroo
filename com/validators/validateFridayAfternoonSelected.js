function validateFridayAfternoonSelected (fridayAfternoonSelected){
    if (typeof fridayAfternoonSelected !== 'boolean') throw new TypeError('fridayAfternoonSelected is not a boolean')
}
module.exports= validateFridayAfternoonSelected;