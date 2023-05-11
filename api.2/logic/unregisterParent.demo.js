const { connect, disconnect } = require('mongoose')
const unregisterParent = require('./unregisterParent')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
       
     return unregisterParent('6415f6352d2d24a14891b174', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
