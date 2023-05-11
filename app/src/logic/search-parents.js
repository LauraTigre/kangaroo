const { validateToken, validateMondayMorningSelected,
    validateMondayAfternoonSelected,
    validateMondayEveningSelected,
    validateTuesdayMorningSelected,
    validateTuesdayAfternoonSelected,
    validateTuesdayEveningSelected,
    validateWendsdayMorningSelected,
    validateWendsdayAfternoonSelected,
    validateWendsdayEveningSelected,
    validateThursdayMorningSelected,
    validateThursdayAfternoonSelected,
    validateThursdayEveningSelected,
    validateFridayMorningSelected,
    validateFridayAfternoonSelected,
    validateFridayEveningSelected,
    validateSaturdayMorningSelected,
    validateSaturdayAfternoonSelected,
    validateSaturdayEveningSelected,
    validateSundayMorningSelected,
    validateSundayAfternoonSelected,
    validateSundayEveningSelected,
    validateKidsFrom,
    validateKidsTo,
    validateCallback, ClientError, ServerError, ExistenceError
} = require('com')

/**
 *search parent with a specific dates
 * 
 * @param {string} userId The user
 * @param {boolean} mondayMorningSelected.... the day and the time the user wants to search
 * @param {number} kidsFrom The number of kids to search from
 * @param {number} kidsTo the number of kids to search from
 */


function searchParents(token, mondayMorningSelected, mondayAfternoonSelected, mondayEveningSelected, tuesdayMorningSelected, tuesdayAfternoonSelected, tuesdayEveningSelected, wendsdayMorningSelected, wendsdayAfternoonSelected, wendsdayEveningSelected, thursdayMorningSelected, thursdayAfternoonSelected, thursdayEveningSelected, fridayMorningSelected, fridayAfternoonSelected, fridayEveningSelected, saturdayMorningSelected, saturdayAfternoonSelected, saturdayEveningSelected, sundayMorningSelected, sundayAfternoonSelected, sundayEveningSelected, kidsFrom, kidsTo, callback) {
    validateToken(token)
    validateMondayMorningSelected(mondayMorningSelected)
    validateMondayAfternoonSelected(mondayAfternoonSelected)
    validateMondayEveningSelected(mondayEveningSelected)
    validateTuesdayMorningSelected(tuesdayMorningSelected)
    validateTuesdayAfternoonSelected(tuesdayAfternoonSelected)
    validateTuesdayEveningSelected(tuesdayEveningSelected)
    validateWendsdayMorningSelected(wendsdayMorningSelected)
    validateWendsdayAfternoonSelected(wendsdayAfternoonSelected)
    validateWendsdayEveningSelected(wendsdayEveningSelected)
    validateThursdayMorningSelected(thursdayMorningSelected)
    validateThursdayAfternoonSelected(thursdayAfternoonSelected)
    validateThursdayEveningSelected(thursdayEveningSelected)
    validateFridayMorningSelected(fridayMorningSelected)
    validateFridayAfternoonSelected(fridayAfternoonSelected)
    validateFridayEveningSelected(fridayEveningSelected)
    validateSaturdayMorningSelected(saturdayMorningSelected)
    validateSaturdayAfternoonSelected(saturdayAfternoonSelected)
    validateSaturdayEveningSelected(saturdayEveningSelected)
    validateSundayMorningSelected(sundayMorningSelected)
    validateSundayAfternoonSelected(sundayAfternoonSelected)
    validateSundayEveningSelected(sundayEveningSelected)
    validateKidsFrom(kidsFrom)
    validateKidsTo(kidsTo)
    
    validateCallback(callback)




    const xhr = new XMLHttpRequest()

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

    xhr.open('GET', `${process.env.REACT_APP_API_URL}/parents/search?mondayMorningSelected=${mondayMorningSelected}&mondayAfternoonSelected=${mondayAfternoonSelected}&mondayEveningSelected=${mondayEveningSelected}&tuesdayMorningSelected=${tuesdayMorningSelected}&tuesdayAfternoonSelected=${tuesdayAfternoonSelected}&tuesdayEveningSelected=${tuesdayEveningSelected}&wendsdayMorningSelected=${wendsdayMorningSelected}&wendsdayAfternoonSelected=${wendsdayAfternoonSelected}&wendsdayEveningSelected=${wendsdayEveningSelected}&thursdayMorningSelected=${thursdayMorningSelected}&thursdayAfternoonSelected=${thursdayAfternoonSelected}&thursdayEveningSelected=${thursdayEveningSelected}&fridayMorningSelected=${fridayMorningSelected}&fridayAfternoonSelected=${fridayAfternoonSelected}&fridayEveningSelected=${fridayEveningSelected}&saturdayMorningSelected=${saturdayMorningSelected}&saturdayAfternoonSelected=${saturdayAfternoonSelected}&saturdayEveningSelected=${saturdayEveningSelected}&sundayMorningSelected=${sundayMorningSelected}&sundayAfternoonSelected=${sundayAfternoonSelected}&sundayEveningSelected=${sundayEveningSelected}&kidsFrom=${kidsFrom}&kidsTo=${kidsTo}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()




}

export default searchParents