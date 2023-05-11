const{connect, disconnect}= require('mongoose')
const registerUser = require('./registerUser')





connect('mongodb://127.0.0.1:27017/kangaroo')

    .then(() => {
       

        return registerUser('Laura Tigre','rubi','lauratigre@gmail.com', '123123123','nanny')
    })
    .then(result => console.log(result))
    .catch(error=> console.error(error))
    .finally(() => disconnect())
