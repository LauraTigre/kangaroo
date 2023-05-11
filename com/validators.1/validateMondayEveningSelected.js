function validateMondayEveningSelected (mondayEveningSelected){
    if (typeof mondayEveningSelected !== 'boolean') throw new TypeError('mondayEveningSelected is not a boolean')
}
module.exports= validateMondayEveningSelected