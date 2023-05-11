function validateNewThursdayAfternoonSelected (thursdayNewAfternoonSelected){
    if (typeof thursdayNewAfternoonSelected !== 'boolean') throw new TypeError('thursdayNewAfternoonSelected is not a boolean')
}
module.exports= validateNewThursdayAfternoonSelected;