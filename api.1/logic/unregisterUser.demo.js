const { connect, disconnect } = require('mongoose')
const unregisterUser = require('./unregisterUser')



connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
       
     return unregisterUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDBkNzFkMTY3Y2JkMWM1MDQwNWY2YmMiLCJpYXQiOjE2Nzg2MDU1MTcsImV4cCI6MTY3ODYwOTExN30.3TcZfO_8lzEPp2rZ-6EVjoQz6xD3LFAyAI8byznUrqg', '123123123')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())

module.exports = unregisterUser