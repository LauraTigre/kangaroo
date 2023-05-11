const { validateToken, validatePassword, validateCallback, ClientError, ServerError, ExistenceError, AuthError } = require('com')

/**
 * Unregisters a user
 * 
 * @param {string} token The session token
 * @param {string} password The user password
 * @param {callback} callback The function to call when the user is unregistered (or failed)
 */


function unregisterNanny(token, password, callback) {
    validateToken(token)
    validatePassword(password)
    validateCallback(callback)
   
    const xhr = new XMLHttpRequest()
 
     xhr.onload =()=> {
        const { status, response } = xhr

        if (status === 204) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 401)
                callback(new AuthError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
  }

  xhr.onerror = () => callback(new Error('network error'))
 
   xhr.open('DELETE', 'http://localhost:8080/nannies')
   xhr.setRequestHeader('Authorization', `Bearer ${token}`)
   xhr.setRequestHeader('Content-Type', 'application/json')
  const payload= {password}
  const json = JSON.stringify(payload)
  xhr.send(json)
  
 
    
 }
 export default unregisterNanny
 