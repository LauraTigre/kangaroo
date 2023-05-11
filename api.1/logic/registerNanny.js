const{User,Nanny}=require('../data/models')
const {validateName, validateCity,validateExperience,validateEmail,validatePassword,validateRole, CoherenceError, }= require('com')


function registerNanny(name,city,experience, email,password,role){

    validateName(name)
    validateCity(city)
    validateExperience(experience)
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
    .then(nanny=>{

            nanny= new Nanny({
             
                city,
                experience,
               
               
            })

            nanny.user= user._id
            nanny.save()

        })

})
}
module.exports=registerNanny