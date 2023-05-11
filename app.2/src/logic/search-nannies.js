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
    validatePriceFrom,
    validatePriceTo,
    validateYearsOfExperienceFrom,
    validateYearsOfExperienceTo,
    validateCallback, ClientError, ServerError, ExistenceError
} = require('com')
/**
 *search nannies with a specific dates
 * 
 * @param {string} userId The user
 * @param {boolean} mondayMorningSelected.... the day and the time the user wants to search
 * @param {number} priceFrom the price from the user wants to select
 * @param {number} priceTo the price to select the user wants to select
 * @param {number} yearsOfExperienceFrom the year of experience the user wants to select from 
 * @param {number} yearsOfExperienceTo the year of experience the user wants to select to
 */


function searchNannies(token, mondayMorningSelected, mondayAfternoonSelected, mondayEveningSelected, tuesdayMorningSelected, tuesdayAfternoonSelected, tuesdayEveningSelected, wendsdayMorningSelected, wendsdayAfternoonSelected, wendsdayEveningSelected, thursdayMorningSelected, thursdayAfternoonSelected, thursdayEveningSelected, fridayMorningSelected, fridayAfternoonSelected, fridayEveningSelected, saturdayMorningSelected, saturdayAfternoonSelected, saturdayEveningSelected, sundayMorningSelected, sundayAfternoonSelected, sundayEveningSelected, priceFrom, priceTo, yearsOfExperienceFrom, yearsOfExperienceTo, callback) {
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
    validatePriceFrom(priceFrom)
    validatePriceTo(priceTo)
    validateYearsOfExperienceFrom(yearsOfExperienceFrom)
    validateYearsOfExperienceTo(yearsOfExperienceTo)
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

    xhr.open('GET', `http://localhost:8080/nannies/search?mondayMorningSelected=${mondayMorningSelected}&mondayAfternoonSelected=${mondayAfternoonSelected}&mondayEveningSelected=${mondayEveningSelected}&tuesdayMorningSelected=${tuesdayMorningSelected}&tuesdayAfternoonSelected=${tuesdayAfternoonSelected}&tuesdayEveningSelected=${tuesdayEveningSelected}&wendsdayMorningSelected=${wendsdayMorningSelected}&wendsdayAfternoonSelected=${wendsdayAfternoonSelected}&wendsdayEveningSelected=${wendsdayEveningSelected}&thursdayMorningSelected=${thursdayMorningSelected}&thursdayAfternoonSelected=${thursdayAfternoonSelected}&thursdayEveningSelected=${thursdayEveningSelected}&fridayMorningSelected=${fridayMorningSelected}&fridayAfternoonSelected=${fridayAfternoonSelected}&fridayEveningSelected=${fridayEveningSelected}&saturdayMorningSelected=${saturdayMorningSelected}&saturdayAfternoonSelected=${saturdayAfternoonSelected}&saturdayEveningSelected=${saturdayEveningSelected}&sundayMorningSelected=${sundayMorningSelected}&sundayAfternoonSelected=${sundayAfternoonSelected}&sundayEveningSelected=${sundayEveningSelected}&priceFrom=${priceFrom}&priceTo=${priceTo}&yearsOfExperienceFrom=${yearsOfExperienceFrom}&yearsOfExperienceTo=${yearsOfExperienceTo}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()




}

export default searchNannies