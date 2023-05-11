const { connect, disconnect } = require('mongoose')
const retrieveParents = require('./retrieveParents')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return retrieveParents('641022522a85afe76f120312')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())