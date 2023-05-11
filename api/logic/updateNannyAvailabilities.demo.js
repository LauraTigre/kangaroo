const { connect, disconnect } = require('mongoose')
const updateNannyAvailabilities = require('./updateNannyAvailabilities')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        

        return updateNannyAvailabilities('641ae08f39ec536dfed3549a' ,true, false, true,  false,false,false,  true,false,true, false,false,false, false,false,false, false,false,true,true,true,true)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())
