function validateThursdayEveningSelected (thursdayEveningSelected){
    if (typeof thursdayEveningSelected !== 'boolean') throw new TypeError('thursdayEveningSelected is not a boolean')
}
module.exports= validateThursdayEveningSelected;