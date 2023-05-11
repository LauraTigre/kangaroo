const { connect, disconnect } = require('mongoose')
const updateDescriptionNanny = require('./updateDescriptionNanny')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateDescriptionNanny('6415f5e39e3d8c682f1fbee7','I am a student of the University and I love kids')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
