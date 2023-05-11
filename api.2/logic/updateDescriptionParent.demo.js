const { connect, disconnect } = require('mongoose')
const updateDescriptionParent = require('./updateDescriptionParent')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateDescriptionParent('6641adfcbd2e17978d7935e92','I need a nanny who wear my kids to school')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
