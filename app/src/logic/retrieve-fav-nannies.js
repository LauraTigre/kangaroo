const { validateToken, validateCallback ,ClientError, ServerError, ExistenceError} = require('com')
/**
 * Retrieves the nannies that favs to the specified user
 * 
 * @param {string} token The token of the user to retrieve the nanny from
 * @param {function} callback The function to call back with the nannies (or an error)
 * @return {Array} The nannies that belong to the specified user
 */
function retrievefavNannies(token, callback) {
    validateToken(token)
    validateCallback(callback)
    const xhr = new XMLHttpRequest()

    xhr.onload=() => {

        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            callback(null, body)
        } else {
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
    xhr.open('GET', `${process.env.REACT_APP_API_URL}/nannies/favs`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}
export default retrievefavNannies