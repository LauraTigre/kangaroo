const { connect, disconnect } = require('mongoose')
const unregisterNanny = require('./unregisterNanny')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
       
     return unregisterNanny('6415f6352d2d24a14891b174', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

