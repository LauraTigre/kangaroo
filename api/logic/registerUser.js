const{User}=require('../data/models')
const {validateName,validateEmail, validatePassword,validateRole, CoherenceError}= require('com')


function registerUser(name,email,password, role){

    validateName(name)

    validateEmail(email)
    validatePassword(password)
    validateRole(role)

    return User.findOne({email})

    .then(user=>{
        if(user) throw new CoherenceError('user already exists')

            user= new User({
                name,
                email,
                password,
                role
            })

            return user.save()

    })



}
module.exports=registerUser