function validateThursdayMorningSelected (thursdayMorningSelected){
    if (typeof thursdayMorningSelected !== 'boolean') throw new TypeError('thursdayMorningSelected is not a boolean')
}
module.exports= validateThursdayMorningSelected;