function validateNewMondayAfternoonSelected (mondayNewAfternoonSelected){
    if (typeof mondayNewAfternoonSelected !== 'boolean') throw new TypeError('mondayNewAfternoonSelected is not a boolean')
}
module.exports= validateNewMondayAfternoonSelected;