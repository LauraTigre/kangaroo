const { User, Nanny } = require('../data/models')

const { validateUserId, validatePhoto, ExistenceError } = require('com')
/**
 * insert photo in the database of nanny
 * 
 * @param {string} userId The user 
 * @param {string} photo The link to the photo

 */
function insertPhotoNanny(userId, photo) {
    validateUserId(userId)
    validatePhoto(photo)

    return Promise.all([User.findById(userId).lean(), Nanny.findOne({ user: userId })])

        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!nanny) throw new ExistenceError(`nanny with id ${userId} not found`)

            nanny.photo= photo
            return nanny.save()
        })

}
module.exports = insertPhotoNanny