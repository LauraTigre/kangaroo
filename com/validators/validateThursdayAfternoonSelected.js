function validateThursdayAfternoonSelected (thursdayAfternoonSelected){
    if (typeof thursdayAfternoonSelected !== 'boolean') throw new TypeError('thursdayAfternoonSelected is not a boolean')
}
module.exports= validateThursdayAfternoonSelected;