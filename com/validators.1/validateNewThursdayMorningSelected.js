function validateNewThursdayMorningSelected (thursdayNewMorningSelected){
    if (typeof thursdayNewMorningSelected !== 'boolean') throw new TypeError('thursdayNewMorningSelected is not a boolean')
}
module.exports= validateNewThursdayMorningSelected;