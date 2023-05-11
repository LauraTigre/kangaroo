import{validateToken, validatePassword,validateNewEmail, validateCallback, ClientError, ServerError, ExistenceError, AuthError } from 'com'


/**
 * Updates the user password
 * 
 * @param {string} token The session token
 * @param {string} newEmail The user new email
 * @param {string} password The user password
 * @param {function} callback The function to call when the update is complete (or fails)
 */

function updateUserEmail(token,password,newEmail, callback) {
    validateToken(token)
    validatePassword(password)
    validateNewEmail(newEmail)
    validateCallback(callback)
    const xhr = new XMLHttpRequest()
     
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
   
    xhr.open('PATCH',`${process.env.REACT_APP_API_URL}/users/email`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {password,newEmail }
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default updateUserEmail