function validateNewSundayAfternoonSelected (sundayNewAfternoonSelected){
    if (typeof sundayNewAfternoonSelected !== 'boolean') throw new TypeError('sundayNewAfternoonSelected is not a boolean')
}
module.exports= validateNewSundayAfternoonSelected;