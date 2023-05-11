const { User, Parent } = require('../data/models')

const { validateUserId, validatePhoto, ExistenceError } = require('com')

/**
 * insert photo in the database of parent user
 * 
 * @param {string} userId The user 
 * @param {string} photo The link to the photo

 */
function insertPhotoParent(userId, photo) {
    validateUserId(userId)
    validatePhoto(photo)

    return Promise.all([User.findById(userId).lean(), Parent.findOne({ user: userId })])

        .then(([user, parent]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!parent) throw new ExistenceError(`parent with id ${userId} not found`)

            parent.photo= photo
            return parent.save()
        })

}
module.exports = insertPhotoParent