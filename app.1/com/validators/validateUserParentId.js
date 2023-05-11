function validateUserParentId(parentId){
    if (typeof parentId !== 'string') throw new TypeError('userId is not a string')
}
module.exports= validateUserParentId