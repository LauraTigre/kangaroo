const { connect, disconnect } = require('mongoose')
const updateExtrasNanny = require('./updateExtrasNanny')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateExtrasNanny('6415f5e39e3d8c682f1fbee7','I am a teacher')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
