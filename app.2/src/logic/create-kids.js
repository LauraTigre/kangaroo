import{validateToken,validateNewName,validateNewDateOfBirth ,validateCallback, ClientError, ServerError, ExistenceError, AuthError } from 'com'


/**
 * Updates the user password
 * 
 * @param {string} token The session token
 * @param {string} newName The parent new description
 * @param {date} newDateOfBirth  kids age
 * @param {function} callback The function to call when the update is complete (or fails)
 */

function createKids(token,newName, newDateOfBirth,callback) {
    validateToken(token)
    validateNewName(newName)
    validateNewDateOfBirth(newDateOfBirth)
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
   
    xhr.open('POST','http://localhost:8080/parents/kids')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {newName,newDateOfBirth }
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default createKids