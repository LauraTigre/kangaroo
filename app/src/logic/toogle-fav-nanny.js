const {validateToken, validateNannyId, validateCallback, ClientError, ServerError,ExistenceError} = require('com')

/**
 * toggles the favorite of specific nanny
 * @param {string } token the user 
 * @param {string} nannyId the nanny identifier
 * @param {function} callback the callback
 */

function toggleFavNanny(token, nannyId, callback){
    validateToken(token)
    validateNannyId(nannyId)
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
            else if (status === 500)
                callback(new ServerError(error))
        }
 }

 xhr.onerror = () => callback(new Error('network error'))

  xhr.open('PATCH', `${process.env.REACT_APP_API_URL}/nannies/${nannyId}/favs`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  
  xhr.send()

   
}
export default toggleFavNanny