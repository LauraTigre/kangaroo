import{validateToken,validateUserIdTo,validateMessage,validateCallback, ClientError, ServerError, ExistenceError, AuthError } from 'com'


/**
 * Send messages 
 * 
 * @param {string} token The session token
 * @param {string} userIdTo The user that wants to send the message
 * @param {string} message The message to send to the user
 * @param {function} callback The function to call when the update is complete (or fails)
 */

function chat(token,userIdTo, message,callback) {
    validateToken(token)
    validateUserIdTo(userIdTo)
    validateMessage(message)
    validateCallback(callback)
    const xhr = new XMLHttpRequest
     
    xhr.onload= () => {
        const { status, response } = xhr

        if (status === 201) {
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
   
    xhr.open('POST',`http://localhost:8080/chats/users/${userIdTo}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {message}
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default chat