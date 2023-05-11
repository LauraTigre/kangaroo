const { Schema, model } = require('mongoose')
const { Types: { ObjectId } } = require('mongoose')

const user = new Schema({

    name: {
        type: String,
        required: true
    },
   

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['parent', 'nanny'],
        required: true,
    }
})

const availability = new Schema({
    day: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },
    times: [{
        type: String,
        emun: ['Morning', 'Afternoon', 'Evening'],
        required: true
    }]

})

const kid = new Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
})

const parent = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',

    },
    city: {
        type: String,
        required: true
    },
  
    description: {
        type: String,
        required: false
    },
    kids: [kid],
    availabilities: [availability],
    extras: {
        type: String,
        required: false
    }
})


const nanny = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',

    },
    city: {
        type: String,
        required: true
    },
  
    description: {
        type: String,
        required: false
    },

    experience: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: false
    },

    price: {
        type: Number,
        required:false
    },

    availabilities: [availability],

    extras: {
        type: String,
        required:false
    },
})

const message = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const chat = new Schema({
    users: [{
        type: ObjectId,
        ref: 'User',
    }],
    messages: [message]
})

const User = model('User', user)
const Parent = model('Parent', parent)
const Kid = model('Kid', kid)
const Nanny = model('Nanny', nanny)
const Availability = model('Availability', availability)
const Chat = model('Chat', chat)
const Message = model('Message', message)



module.exports = {
    User,
    Parent,
    Kid,
    Nanny,
    Availability,
    Chat,
    Message
}