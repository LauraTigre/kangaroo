const { validateUserId, validateMondayMorningSelected,
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
    validateYearsOfExperienceTo, CoherenceError, ExistenceError,
} = require('com')
const { User, Nanny, Parent } = require('../data/models')

function searchNannies(userId, mondayMorningSelected, mondayAfternoonSelected, mondayEveningSelected, tuesdayMorningSelected, tuesdayAfternoonSelected, tuesdayEveningSelected, wendsdayMorningSelected, wendsdayAfternoonSelected, wendsdayEveningSelected, thursdayMorningSelected, thursdayAfternoonSelected, thursdayEveningSelected, fridayMorningSelected, fridayAfternoonSelected, fridayEveningSelected, saturdayMorningSelected, saturdayAfternoonSelected, saturdayEveningSelected, sundayMorningSelected, sundayAfternoonSelected, sundayEveningSelected, priceFrom, priceTo, yearsOfExperienceFrom, yearsOfExperienceTo) {
    validateUserId(userId)
    if (mondayMorningSelected !== undefined) validateMondayMorningSelected(mondayMorningSelected)
    if (mondayAfternoonSelected !== undefined) validateMondayAfternoonSelected(mondayAfternoonSelected)
    if (mondayEveningSelected !== undefined) validateMondayEveningSelected(mondayEveningSelected)
    if (tuesdayMorningSelected !== undefined) validateTuesdayMorningSelected(tuesdayMorningSelected)
    if (tuesdayAfternoonSelected !== undefined) validateTuesdayAfternoonSelected(tuesdayAfternoonSelected)
    if (tuesdayEveningSelected !== undefined) validateTuesdayEveningSelected(tuesdayEveningSelected)
    if (wendsdayMorningSelected !== undefined) validateWendsdayMorningSelected(wendsdayMorningSelected)
    if (wendsdayAfternoonSelected !== undefined) validateWendsdayAfternoonSelected(wendsdayAfternoonSelected)
    if (wendsdayEveningSelected !== undefined) validateWendsdayEveningSelected(wendsdayEveningSelected)
    if (thursdayMorningSelected !== undefined) validateThursdayMorningSelected(thursdayMorningSelected)
    if (thursdayAfternoonSelected !== undefined) validateThursdayAfternoonSelected(thursdayAfternoonSelected)
    if (thursdayEveningSelected !== undefined) validateThursdayEveningSelected(thursdayEveningSelected)
    if (fridayMorningSelected !== undefined) validateFridayMorningSelected(fridayMorningSelected)
    if (fridayAfternoonSelected !== undefined) validateFridayAfternoonSelected(fridayAfternoonSelected)
    if (fridayEveningSelected !== undefined) validateFridayEveningSelected(fridayEveningSelected)
    if (saturdayMorningSelected !== undefined) validateSaturdayMorningSelected(saturdayMorningSelected)
    if (saturdayAfternoonSelected !== undefined) validateSaturdayAfternoonSelected(saturdayAfternoonSelected)
    if (saturdayEveningSelected !== undefined) validateSaturdayEveningSelected(saturdayEveningSelected)
    if (sundayMorningSelected !== undefined) validateSundayMorningSelected(sundayMorningSelected)
    if (sundayAfternoonSelected !== undefined) validateSundayAfternoonSelected(sundayAfternoonSelected)
    if (sundayEveningSelected !== undefined) validateSundayEveningSelected(sundayEveningSelected)
    if (priceFrom !== undefined) validatePriceFrom(priceFrom)
    if (priceTo !== undefined) validatePriceTo(priceTo)
    if (yearsOfExperienceFrom !== undefined) validateYearsOfExperienceFrom(yearsOfExperienceFrom)
    if (yearsOfExperienceTo !== undefined) validateYearsOfExperienceTo(yearsOfExperienceTo)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (user.role !== 'parent') throw new CoherenceError('invalid user role')


                .then(user => {

                    const filter = {}

                    if (mondayMorningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Morning' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Morning' } } } }]
                    if (mondayAfternoonSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Afternoon' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Afternoon' } } } }]
                    if (mondayEveningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Evening' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Evening' } } } }]

                    if (tuesdayMorningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Morning' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Morning' } } } }]
                    if (tuesdayAfternoonSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Afternoon' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Afternoon' } } } }]
                    if (tuesdayEveningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Evening' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Evening' } } } }]

                    if (wendsdayMorningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Morning' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Morning' } } } }]
                    if (wendsdayAfternoonSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Afternoon' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Afternoon' } } } }]
                    if (wendsdayEveningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Evening' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Evening' } } } }]

                    if (thursdayMorningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Morning' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Morning' } } } }]
                    if (thursdayAfternoonSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Afternoon' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Afternoon' } } } }]
                    if (thursdayEveningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Evening' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Evening' } } } }]

                    if (fridayMorningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Morning' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Morning' } } } }]
                    if (fridayAfternoonSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Afternoon' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Afternoon' } } } }]
                    if (fridayEveningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Evening' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Evening' } } } }]

                    if (saturdayMorningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Morning' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Morning' } } } }]
                    if (saturdayAfternoonSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Afternoon' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Afternoon' } } } }]
                    if (saturdayEveningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Evening' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Evening' } } } }]

                    if (sundayMorningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Morning' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Morning' } } } }]
                    if (sundayAfternoonSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Afternoon' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Afternoon' } } } }]
                    if (sundayEveningSelected) filter['$and'] ? filter['$and'].push(
                        { availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Evening' } } } }
                    ) : filter['$and'] = [{ availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Evening' } } } }]

                    if (priceFrom && !priceTo)
                        filter.price = { $gte: priceFrom }
                    else if (!priceFrom && priceTo)
                        filter.price = { $lte: priceTo }
                    else if (priceFrom && priceTo)
                        filter.price = { $gte: priceFrom, $lte: priceTo }

                    if (yearsOfExperienceFrom && !yearsOfExperienceTo)
                        filter.experience = { $gte: yearsOfExperienceFrom }
                    else if (!yearsOfExperienceFrom && yearsOfExperienceTo)
                        filter.experience = { $lte: yearsOfExperienceTo }
                    else if (yearsOfExperienceFrom && yearsOfExperienceTo)
                        filter.experience = { $gte: yearsOfExperienceFrom, $lte: yearsOfExperienceTo }

                    return Nanny.find(filter).populate('user', '-password -__v').select('-__v').lean()


                })
                
                .then(nannies => {
                    // return Parent.findOne({ user: userId }).lean()
                    const favNannies = parent.favs.map(fav => fav.toString())
                    nannies.forEach(nanny => {

                        if (nanny._id) {
                            nanny.id = nanny._id.toString()
                            delete nanny._id
                            delete nanny.__v
                        }
                        if (nanny.user._id) {
                            nanny.user.id = nanny.user._id.toString()
                            delete nanny.user._id
                        }
                        nanny.availabilities.forEach(availability => {
                            availability.id = availability._id.toString()
                            delete availability._id
                        })
                        if (favNannies.includes(nanny.id)) nanny.fav = true
                    })


                    return nannies
                })
        })
}




module.exports = searchNannies

