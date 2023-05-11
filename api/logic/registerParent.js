const { User, Parent } = require('../data/models')
const { validateName, validateCity, validateEmail, validatePassword, CoherenceError, } = require('com')
const bcrypt = require('bcryptjs')

/**
 * register a new parent user 
 * 
 * @param {string} name The name of the parent user
 * @param {string} city The city of the parent user
 * @param {string} email The email of the parent user
 * @param {number} password The password of the parent user

 */

function registerParent(name, city, email, password) {

    validateName(name)
    validateCity(city)
    validateEmail(email)
    validatePassword(password)

    return User.findOne({ email })

        .then(user => {
            if (user) throw new CoherenceError('user already exists')
            return bcrypt.hash(password, 10)
        })
        .then(hash => {

            user = new User({
                name,
                email,
                password: hash,
                role: 'parent'
            })

            return user.save()
        })
        .then(user => {


            const parent = new Parent({

                city,

            })
            parent.user = user._id
            return parent.save()
        })

}
module.exports = registerParent