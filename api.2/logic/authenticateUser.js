const {validateEmail,validatePassword,ExistenceError,AuthError}=require('com')
const {User}=require('../data/models')
/**
 * Authenticates a user in database
 * 
 * @param {string} email The user the mail belongs to
 * @param {string} password The password for the user

 */

function authenticateUser(email,password){
    validateEmail(email)
    validatePassword(password)


    return User.findOne({email}).lean()
    .then(user=>{
        if(!user) throw new ExistenceError('user not found')
        
        if(user.password!==password) throw new AuthError('wrong credentials')

        return user._id
    })
}

module.exports=authenticateUser