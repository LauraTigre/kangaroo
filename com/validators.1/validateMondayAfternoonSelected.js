function validateMondayAfternoonSelected (mondayAfternoonSelected){
    if (typeof mondayAfternoonSelected !== 'boolean') throw new TypeError('mondayAfternoonSelected is not a boolean')
}
module.exports= validateMondayAfternoonSelected;