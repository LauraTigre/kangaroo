const { connect, disconnect } = require('mongoose')
const updateUserEmail = require('./updateUserEmail')



connect('mongodb://127.0.0.1:27017/Kangaroo')
    .then(() => {
        

        return updateUserEmail('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDBkODVkMTdkOTdlYjI0YTRlODVkOTkiLCJpYXQiOjE2Nzg2MDc4MzcsImV4cCI6MTY3ODYxMTQzN30.3oXtEPFPMsTvpDJnoVvCwkYz4UJ8RndcCVWB71vU_cc','234234234','ltigre@gmail.com')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

