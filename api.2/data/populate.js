const { validateAvailabilities } = require('com')
const { connect, disconnect } = require('mongoose')
const { User, Availability, Kid, Parent, Nanny, Chat, Message } = require('./models')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        const userParent = new User({
            name: 'Miguel Fernandez',
            email: 'miguel@fernandez.com',
            password: '123123123',
            role: 'parent'
        })

        const userNanny = new User({
            name: 'Maribel Gonzalez',
            email: 'maribel@gonzalez.com',
            password: '123123123',
            role: 'nanny'
        })


        return Promise.all([
            userParent.save(),
            userNanny.save()
        ])
    })
            .then(([userParent, userNanny]) => {
                const parent = new Parent({
                    user: userParent.id,
                    description: 'Im a parent who needs a nanny for my two kids',
                    city: 'Barcelona',
                    extras: 'I need a nanny with reference'
                })

                const kid = new Kid({
                    name: 'juan',
                    dateOfBirth: new Date(2016, 2, 20),
                })
                const kid2= new Kid({
                    name: 'juana',
                    dateOfBirth:new Date(2016, 2, 20)
                })

                parent.kids.push(kid)
                parent.kids.push(kid2)

                const availability = new Availability({
                    day: 'Monday',
                    times: 'Morning'
                })
                const availability2 = new Availability({
                    day: 'Monday',
                    times: 'Evening'
                })
            
                parent.availabilities.push(availability)
                parent.availabilities.push(availability2)
             

                const nanny = new Nanny({
                    user: userNanny.id,
                    city: 'Barcelona',
                    description: 'I am a nanny with reference',
                    experience: 4,
                    dateOfBirth: new Date(1995, 2, 20),
                    price: 15,
                    extras: 'I have car'
                })

                const availability3 = new Availability({
                    day: 'Monday',
                    times: ['Afternoon']
                })
                const availability4 = new Availability({
                    day: 'Friday',
                    times: ['Morning', 'Evening']
                })

                nanny.availabilities.push(availability3)
                nanny.availabilities.push(availability4)

                return Promise.all([
                    parent.save(),
                    nanny.save()
                ])

            })
            .then(([userParent, userNanny]) => {
                const chat = new Chat({
                    users: [userParent.id, userNanny.id]
                })

                const message = new Message({
                    user: userParent.id,
                    message: 'im interested on you',
                    date: new Date(2023, 2, 20)

                })

                const message2 = new Message({
                    user: userNanny.id,
                    message: 'thank you, i am ready',
                    date: new Date(2023, 2, 20)

                })

                chat.messages.push(message)
                chat.messages.push(message2)

                return chat.save()

            })
        

            .then(() => disconnect())
            .catch(error => console.error(error))