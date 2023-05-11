const { connect, disconnect } = require('mongoose')
const deleteKid = require('./deleteKid')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
       
     return deleteKid('641adfcbd2e17978d7935e92','641dd1d186df60f4bb931584')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())


