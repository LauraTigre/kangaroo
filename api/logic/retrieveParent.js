const { validateUserId, validateUserParentId, ExistenceError, CoherenceError } = require('com')
const { User, Parent, Nanny, Chat } = require('../data/models')
/**
 *retrieve parent user if the user is the parent or the user is a parent
 * 
 * @param {string} userId The user
 * @param {string} parentId The parent user id
 */
function retrieveParent(userId, parentId) {
    validateUserId(userId)
   if(typeof parentId !== 'undefined') validateUserParentId(parentId)

   return User.findById(userId).lean()
   .then(user =>{
    if(!user) throw new ExistenceError(`user with id ${userId} not found`)
    // if (!nanny) throw new ExistenceError(`nanny for user id ${userId} not found`)
    
    let promise
    if(parentId && user.role === 'nanny')
    promise=Promise.all([Parent.findById(parentId).populate('user', '-__v').select('-__v').lean(),Nanny.findOne({user: userId}).lean(),Chat.find({ users: userId }).lean()]) 
    else
    promise = Parent.findOne({user: userId}).populate('user', '-__v').select('-__v').lean()

    return promise
    .then((results)=> {
        let parent, nanny, chats
        if(parentId && user.role === 'nanny'){
            [parent,nanny, chats] = results
            const chat = chats.find(chat => chat.users.map(userId=> userId.toString()).includes(parent.user._id.toString()))
            if(chat){
               parent.chat = chat._id.toString() 
            }
        }else{
            parent=results
        }
        if(!parent) throw new ExistenceError(`parent with id ${parentId} not found`)
        
        if(user.role === 'parent' && parent.user._id.toString() !== userId)throw new CoherenceError(`user id ${userId} with role parent is not related to parent with id ${parentId}`)

         // sanitize
         parent.id = parent._id.toString()
         parent.user.id = parent.user._id.toString()
         parent.availabilities.forEach(availability => {
             availability.id = availability._id.toString()
             delete availability._id
         })
         parent.kids.forEach(kid => {
            kid.id = kid._id.toString()
            delete kid._id
         })
         
         delete parent._id
         delete parent.user._id

         if(user.role === 'nanny') parent.fav= nanny.favs.some(fav => fav.toString() === parent.id )

         return parent
    })
   })
    
}
module.exports = retrieveParent