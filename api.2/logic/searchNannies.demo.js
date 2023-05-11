const { connect, disconnect } = require('mongoose')
const searchNannies = require('./searchNannies')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
    

        return searchNannies('641ae08f39ec536dfed35499',false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false,undefined,undefined,undefined,undefined)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

