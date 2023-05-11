const { validateToken, validateChatId,validateCallback, ClientError, ServerError, ExistenceError} = require('com')
/**
 * Retrieves the chats of a user
 * 
 * @param {string} token The token of the user to retrieve
 * @param {string} chatId The chat id of an specific user
 * @param {function} callback The function to call back with the user (or an error)
 */
function retrieveChat(token, chatId,callback){
    validateToken(token)
    validateChatId(chatId)
    validateCallback(callback)
    const xhr= new XMLHttpRequest()

    xhr.onload = () => {
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

    xhr.open('GET', `http://localhost:8080/chats/${chatId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrieveChat