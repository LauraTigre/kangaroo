import { validateToken,validateNewMondayMorningSelected,validateNewMondayAfternoonSelected,validateNewMondayEveningSelected,  validateNewTuesdayMorningSelected,validateNewTuesdayAfternoonSelected,validateNewTuesdayEveningSelected,  validateNewWendsdayMorningSelected,validateNewWendsdayAfternoonSelected,validateNewWendsdayEveningSelected, validateNewThursdayMorningSelected,validateNewThursdayAfternoonSelected,validateNewThursdayEveningSelected,validateNewFridayMorningSelected,validateNewFridayAfternoonSelected,validateNewFridayEveningSelected, validateNewSaturdayMorningSelected,validateNewSaturdayAfternoonSelected,validateNewSaturdayEveningSelected,validateNewSundayMorningSelected,validateNewSundayAfternoonSelected,validateNewSundayEveningSelected, validateCallback, ClientError, ServerError, ExistenceError, AuthError } from 'com'


/**
 * Updates the user password
 * 
 * @param {string} token The session token
 * @param {bolean} newSundayMorningSelected.... The days that the nanny will be selected
 * @param {function} callback The function to call when the update is complete (or fails)
 */

function updateNannyAvailabilities(token,newMondayMorningSelected,
    newMondayAfternoonSelected,
    newMondayEveningSelected,
    newTuesdayMorningSelected, newTuesdayAfternoonSelected, newTuesdayEveningSelected, newWendsdayMorningSelected, newWendsdayAfternoonSelected, newWendsdayEveningSelected, newThursdayMorningSelected, newThursdayAfternoonSelected, newThursdayEveningSelected, newFridayMorningSelected, newFridayAfternoonSelected, newFridayEveningSelected, newSaturdayMorningSelected, newSaturdayAfternoonSelected, newSaturdayEveningSelected, newSundayMorningSelected, newSundayAfternoonSelected, newSundayEveningSelected, callback) {
    validateToken(token)
    validateNewMondayMorningSelected(newMondayMorningSelected)
    validateNewMondayAfternoonSelected(newMondayAfternoonSelected)
    validateNewMondayEveningSelected(newMondayEveningSelected)
    validateNewTuesdayMorningSelected(newTuesdayMorningSelected)
    validateNewTuesdayAfternoonSelected(newTuesdayAfternoonSelected)
    validateNewTuesdayEveningSelected(newTuesdayEveningSelected)
    validateNewWendsdayMorningSelected(newWendsdayMorningSelected)
    validateNewWendsdayAfternoonSelected(newWendsdayAfternoonSelected)
    validateNewWendsdayEveningSelected(newWendsdayEveningSelected)
    validateNewThursdayMorningSelected(newThursdayMorningSelected)
    validateNewThursdayAfternoonSelected(newThursdayAfternoonSelected)
    validateNewThursdayEveningSelected(newThursdayEveningSelected)
    validateNewFridayMorningSelected(newFridayMorningSelected)
    validateNewFridayAfternoonSelected(newFridayAfternoonSelected)
    validateNewFridayEveningSelected(newFridayEveningSelected)
    validateNewSaturdayMorningSelected(newSaturdayMorningSelected)
    validateNewSaturdayAfternoonSelected(newSaturdayAfternoonSelected)
    validateNewSaturdayEveningSelected(newSaturdayEveningSelected)
    validateNewSundayMorningSelected(newSundayMorningSelected)
    validateNewSundayAfternoonSelected(newSundayAfternoonSelected)
    validateNewSundayEveningSelected(newSundayEveningSelected)
    validateCallback(callback)
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
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

    xhr.open('PATCH', 'http://localhost:8080/nannies/availabilities')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = {  newMondayMorningSelected, newMondayAfternoonSelected, newMondayEveningSelected, newTuesdayMorningSelected, newTuesdayAfternoonSelected, newTuesdayEveningSelected, newWendsdayMorningSelected, newWendsdayAfternoonSelected, newWendsdayEveningSelected, newThursdayMorningSelected, newThursdayAfternoonSelected, newThursdayEveningSelected, newFridayMorningSelected, newFridayAfternoonSelected, newFridayEveningSelected, newSaturdayMorningSelected, newSaturdayAfternoonSelected, newSaturdayEveningSelected, newSundayMorningSelected, newSundayAfternoonSelected, newSundayEveningSelected }
    const json = JSON.stringify(payload)

    xhr.send(json)

}
export default updateNannyAvailabilities