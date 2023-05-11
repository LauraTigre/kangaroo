const{User,Parent}=require('../data/models')
const {Types:{ ObjectId} }= require('mongoose')
const {validateName, validateCity,validateEmail,validatePassword,validateRole, CoherenceError, }= require('com')



function registerParent(name,city,email,password,role){

    validateName(name)
    validateCity(city)
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

            user.save()
        .then(parent=>{

            
            parent= new Parent({
             
                city,
               
            })
            
            
            parent.user = user._id
            parent.save()
        })  



})
}
module.exports=registerParent