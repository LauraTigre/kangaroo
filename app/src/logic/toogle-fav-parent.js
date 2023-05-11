const {validateToken, validateParentId, validateCallback, ClientError, ServerError,ExistenceError} = require('com')

/**
 * toggles the favorite of specific parent
 * @param {string } token the user 
 * @param {string} parentId the parent identifier
 * @param {function} callback the callback
 */

function toggleFavParent(token, parentId, callback){
    validateToken(token)
    validateParentId(parentId)
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

  xhr.open('PATCH', `${process.env.REACT_APP_API_URL}/parents/${parentId}/favs`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.send()

   
}
export default toggleFavParent