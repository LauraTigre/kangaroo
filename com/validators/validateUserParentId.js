function validateUserParentId(parentId){
    if (typeof parentId !== 'string') throw new TypeError('parentId is not a string')
}
module.exports= validateUserParentId