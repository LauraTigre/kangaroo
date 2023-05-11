const { connect, disconnect } = require('mongoose')
const searchParents = require('./searchParents')


connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
    

        return searchParents('641ae08f39ec536dfed3549a',false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false, false,false,false,undefined,undefined)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

