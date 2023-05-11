const { connect, disconnect } = require('mongoose')
const updateUserEmail = require('./updateUserEmail')



connect('mongodb://127.0.0.1:27017/Kangaroo')
    .then(() => {
        

        return updateUserEmail('6415f5e39e3d8c682f1fbee7','234234234','patri@gonzalez.com')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

