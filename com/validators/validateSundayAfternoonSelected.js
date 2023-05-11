function validateSundayAfternoonSelected (sundayAfternoonSelected){
    if (typeof sundayAfternoonSelected !== 'boolean') throw new TypeError('sundayAfternoonSelected is not a boolean')
}
module.exports= validateSundayAfternoonSelected;