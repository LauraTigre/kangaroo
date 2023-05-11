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
    validateKidsFrom, validateKidsTo, ExistenceError, CoherenceError
} = require('com')
const { User, Parent, Nanny, Chat } = require('../data/models')
/**
 *search parents with a specific dates
 * 
 * @param {string} userId The user
 * @param {boolean} mondayMorningSelected.... the day and the time the user wants to search
 * @param {number} kidsFrom the kids the user wants to select from
 * @param {number} kidsTo the kids the user wants to select to
 
 */


function searchParents(userId, mondayMorningSelected, mondayAfternoonSelected, mondayEveningSelected, tuesdayMorningSelected, tuesdayAfternoonSelected, tuesdayEveningSelected, wendsdayMorningSelected, wendsdayAfternoonSelected, wendsdayEveningSelected, thursdayMorningSelected, thursdayAfternoonSelected, thursdayEveningSelected, fridayMorningSelected, fridayAfternoonSelected, fridayEveningSelected, saturdayMorningSelected, saturdayAfternoonSelected, saturdayEveningSelected, sundayMorningSelected, sundayAfternoonSelected, sundayEveningSelected, kidsFrom, kidsTo) {
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
    if (kidsFrom !== undefined) validateKidsFrom(kidsFrom)
    if (kidsTo !== undefined) validateKidsTo(kidsTo)

    return Promise.all([User.findById(userId).lean(), Nanny.findOne({ user: userId }).lean()])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)


            if (user.role !== 'nanny') throw new CoherenceError(`user with id ${userId} is not a nanny`)

            const filter = {}

            if (mondayMorningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Morning' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Morning' } } } }]
            if (mondayAfternoonSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Afternoon' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Afternoon' } } } }]
            if (mondayEveningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Evening' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Monday', times: { $eq: 'Evening' } } } }]

            if (tuesdayMorningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Morning' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Morning' } } } }]
            if (tuesdayAfternoonSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Afternoon' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Afternoon' } } } }]
            if (tuesdayEveningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Evening' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Tuesday', times: { $eq: 'Evening' } } } }]

            if (wendsdayMorningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Morning' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Morning' } } } }]
            if (wendsdayAfternoonSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Afternoon' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Afternoon' } } } }]
            if (wendsdayEveningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Evening' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Wendsday', times: { $eq: 'Evening' } } } }]

            if (thursdayMorningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Morning' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Morning' } } } }]
            if (thursdayAfternoonSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Afternoon' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Afternoon' } } } }]
            if (thursdayEveningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Evening' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Thurday', times: { $eq: 'Evening' } } } }]

            if (fridayMorningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Morning' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Morning' } } } }]
            if (fridayAfternoonSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Afternoon' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Afternoon' } } } }]
            if (fridayEveningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Evening' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Friday', times: { $eq: 'Evening' } } } }]

            if (saturdayMorningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Morning' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Morning' } } } }]
            if (saturdayAfternoonSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Afternoon' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Afternoon' } } } }]
            if (saturdayEveningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Evening' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Saturday', times: { $eq: 'Evening' } } } }]

            if (sundayMorningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Morning' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Morning' } } } }]
            if (sundayAfternoonSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Afternoon' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Afternoon' } } } }]
            if (sundayEveningSelected) filter.$and ? filter.$and.push(
                { availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Evening' } } } }
            ) : filter.$and = [{ availabilities: { $elemMatch: { day: 'Sunday', times: { $eq: 'Evening' } } } }]

            if (kidsFrom && !kidsTo)
                filter.$expr = { $gte: [{ $size: '$kids' }, kidsFrom] }
            else if (!kidsFrom && kidsTo)
                filter.$expr = { $lte: [{ $size: '$kids' }, kidsTo] }
            else if (kidsFrom && kidsTo)
                filter.$expr = { $and: [{ $gte: [{ $size: '$kids' }, kidsFrom] }, { $lte: [{ $size: '$kids' }, kidsTo] }] }



            return Parent.find(filter).populate('user', '-password -__v').select('-__v').lean()
                .then(parents => {
                    return Chat.find({ users: userId }).lean()
                        .then(chats => {
                            parents.forEach(parent => {

                                if (parent._id) {
                                    parent.id = parent._id.toString()
                                    delete parent._id
                                    delete parent.__v
                                }
                                if (parent.user._id) {
                                    parent.user.id = parent.user._id.toString()
                                    delete parent.user._id
                                }
                                const chat = chats.find(chat => chat.users.map(userId=> userId.toString()).includes(parent.user.id))
                                        if(chat){
                                           parent.chat = chat._id.toString() 
                                        }
                                parent.availabilities.forEach(availability => {
                                    availability.id = availability._id.toString()
                                    delete availability._id
                                })

                                parent.kids.forEach(kid => {
                                    kid.id = kid._id.toString()
                                    delete kid._id
                                })

                                if (user.role === 'nanny'){ parent.fav = nanny.favs.some(fav => fav.toString() === parent.id)}


                            })

                            return parents
                        })
                })
        })
}


module.exports = searchParents

