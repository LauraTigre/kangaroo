import{validateToken,validateNewExtras ,validateCallback, ClientError, ServerError, ExistenceError, AuthError } from 'com'


/**
 * Updates the user password
 * 
 * @param {string} token The session token
 * @param {string} newExtras The nanny new description
 * @param {function} callback The function to call when the update is complete (or fails)
 */

function updateExtrasNanny(token,newExtras, callback) {
    validateToken(token)
    validateNewExtras(newExtras)
    validateCallback(callback)
    const xhr = new XMLHttpRequest
     
    xhr.onload= () => {
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
   
    xhr.open('PATCH','http://localhost:8080/nannies/extras')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {newExtras }
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default updateExtrasNanny