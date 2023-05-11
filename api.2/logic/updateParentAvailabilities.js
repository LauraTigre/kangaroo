const { User,Parent,Availability } = require('../data/models')
const { validateUserId, validateNewMondayMorningSelected,
    validateNewMondayAfternoonSelected,
    validateNewMondayEveningSelected,
    validateNewTuesdayMorningSelected,
    validateNewTuesdayAfternoonSelected,
    validateNewTuesdayEveningSelected,
    validateNewWendsdayMorningSelected,
    validateNewWendsdayAfternoonSelected,
    validateNewWendsdayEveningSelected,
    validateNewThursdayMorningSelected,
    validateNewThursdayAfternoonSelected,
    validateNewThursdayEveningSelected,
    validateNewFridayMorningSelected,
    validateNewFridayAfternoonSelected,
    validateNewFridayEveningSelected,
    validateNewSaturdayMorningSelected,
    validateNewSaturdayAfternoonSelected,
    validateNewSaturdayEveningSelected,
    validateNewSundayMorningSelected,
    validateNewSundayAfternoonSelected,
    validateNewSundayEveningSelected,
    ExistenceError
} = require('com')
/**
* Update availability that parent wants to be updated
* 
* @param {string} userId The userId
* @param {boolean} newMondayMorningSelected..... that the user wants to be updated
**/

function updateParentAvailabilities(userId,
    newMondayMorningSelected,
    newMondayAfternoonSelected,
    newMondayEveningSelected,
    newTuesdayMorningSelected, newTuesdayAfternoonSelected, newTuesdayEveningSelected, newWendsdayMorningSelected, newWendsdayAfternoonSelected, newWendsdayEveningSelected, newThursdayMorningSelected, newThursdayAfternoonSelected, newThursdayEveningSelected, newFridayMorningSelected, newFridayAfternoonSelected, newFridayEveningSelected, newSaturdayMorningSelected, newSaturdayAfternoonSelected, newSaturdayEveningSelected, newSundayMorningSelected, newSundayAfternoonSelected, newSundayEveningSelected) {
    validateUserId(userId)
    if (newMondayMorningSelected !== undefined) validateNewMondayMorningSelected(newMondayMorningSelected)
    if (newMondayAfternoonSelected !== undefined) validateNewMondayAfternoonSelected(newMondayAfternoonSelected)
    if (newMondayEveningSelected !== undefined) validateNewMondayEveningSelected(newMondayEveningSelected)
    if (newTuesdayMorningSelected !== undefined) validateNewTuesdayMorningSelected(newTuesdayMorningSelected)
    if (newTuesdayAfternoonSelected !== undefined) validateNewTuesdayAfternoonSelected(newTuesdayAfternoonSelected)
    if (newTuesdayEveningSelected !== undefined) validateNewTuesdayEveningSelected(newTuesdayEveningSelected)
    if (newWendsdayMorningSelected !== undefined) validateNewWendsdayMorningSelected(newWendsdayMorningSelected)
    if (newWendsdayAfternoonSelected !== undefined) validateNewWendsdayAfternoonSelected(newWendsdayAfternoonSelected)
    if (newWendsdayEveningSelected !== undefined) validateNewWendsdayEveningSelected(newWendsdayEveningSelected)
    if (newThursdayMorningSelected !== undefined) validateNewThursdayMorningSelected(newThursdayMorningSelected)
    if (newThursdayAfternoonSelected !== undefined) validateNewThursdayAfternoonSelected(newThursdayAfternoonSelected)
    if (newThursdayEveningSelected !== undefined) validateNewThursdayEveningSelected(newThursdayEveningSelected)
    if (newFridayMorningSelected !== undefined) validateNewFridayMorningSelected(newFridayMorningSelected)
    if (newFridayAfternoonSelected !== undefined) validateNewFridayAfternoonSelected(newFridayAfternoonSelected)
    if (newFridayEveningSelected !== undefined) validateNewFridayEveningSelected(newFridayEveningSelected)
    if (newSaturdayMorningSelected !== undefined) validateNewSaturdayMorningSelected(newSaturdayMorningSelected)
    if (newSaturdayAfternoonSelected !== undefined) validateNewSaturdayAfternoonSelected(newSaturdayAfternoonSelected)
    if (newSaturdayEveningSelected !== undefined) validateNewSaturdayEveningSelected(newSaturdayEveningSelected)
    if (newSundayMorningSelected !== undefined) validateNewSundayMorningSelected(newSundayMorningSelected)
    if (newSundayAfternoonSelected !== undefined) validateNewSundayAfternoonSelected(newSundayAfternoonSelected)
    if (newSundayEveningSelected !== undefined) validateNewSundayEveningSelected(newSundayEveningSelected)


    return Promise.all ([User.findById(userId).lean(),Parent.findOne({user: userId})])
        .then(([user,parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)
        
            if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)

            const availabilities = []

            if (newMondayMorningSelected || newMondayAfternoonSelected || newMondayEveningSelected) {
                const availability = new Availability({ day: 'Monday' })

                if (newMondayMorningSelected) availability.times.push('Morning')
                if (newMondayAfternoonSelected) availability.times.push('Afternoon')
                if (newMondayEveningSelected) availability.times.push('Evening')

                availabilities.push(availability)
            }

            if (newTuesdayMorningSelected || newTuesdayAfternoonSelected || newTuesdayEveningSelected) {
                const availability = new Availability({ day: 'Tuesday' })

                if (newTuesdayMorningSelected) availability.times.push('Morning')
                if (newTuesdayAfternoonSelected) availability.times.push('Afternoon')
                if (newTuesdayEveningSelected) availability.times.push('Evening')

                availabilities.push(availability)
            }

            if (newWendsdayMorningSelected || newWendsdayAfternoonSelected || newWendsdayEveningSelected) {
                const availability = new Availability({ day: 'Wendsday' })

                if (newWendsdayMorningSelected) availability.times.push('Morning')
                if (newWendsdayAfternoonSelected) availability.times.push('Afternoon')
                if (newWendsdayEveningSelected) availability.times.push('Evening')

                availabilities.push(availability)
            }

            if (newThursdayMorningSelected || newThursdayAfternoonSelected || newThursdayEveningSelected) {
                const availability = new Availability({ day: 'Thursday' })

                if (newThursdayMorningSelected) availability.times.push('Morning')
                if (newThursdayAfternoonSelected) availability.times.push('Afternoon')
                if (newThursdayEveningSelected) availability.times.push('Evening')

                availabilities.push(availability)
            }

            if (newFridayMorningSelected || newFridayAfternoonSelected || newFridayEveningSelected) {
                const availability = new Availability({ day: 'Friday' })

                if (newFridayMorningSelected) availability.times.push('Morning')
                if (newFridayAfternoonSelected) availability.times.push('Afternoon')
                if (newFridayEveningSelected) availability.times.push('Evening')

                availabilities.push(availability)
            }

            if (newSaturdayMorningSelected || newSaturdayAfternoonSelected || newSaturdayEveningSelected) {
                const availability = new Availability({ day: 'Saturday' })

                if (newSaturdayMorningSelected) availability.times.push('Morning')
                if (newSaturdayAfternoonSelected) availability.times.push('Afternoon')
                if (newSaturdayEveningSelected) availability.times.push('Evening')

                availabilities.push(availability)
            }

            if (newSundayMorningSelected || newSundayAfternoonSelected || newSundayEveningSelected) {
                const availability = new Availability({ day: 'Sunday' })

                if (newSundayMorningSelected) availability.times.push('Morning')
                if (newSundayAfternoonSelected) availability.times.push('Afternoon')
                if (newSundayEveningSelected) availability.times.push('Evening')

                availabilities.push(availability)
            }

            parent.availabilities = availabilities

            parent.id = parent._id.toString()
            parent.user.id = parent.user._id.toString()
            parent.availabilities.forEach(availability => {
                availability.id = availability._id.toString()
                delete availability._id
            })
            delete parent._id
            delete parent.user._id
            return parent.save()

        })
}
module.exports = updateParentAvailabilities