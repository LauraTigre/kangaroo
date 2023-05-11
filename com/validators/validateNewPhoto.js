function validateNewPhoto (newPhoto){
    if (typeof newPhoto !== 'string') throw new TypeError('newPhoto is not a string')
}
module.exports= validateNewPhoto