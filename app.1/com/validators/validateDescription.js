function validateDescription(description){
    if (typeof description !== 'string') throw new TypeError('description is not a string')
}
module.exports= validateDescription