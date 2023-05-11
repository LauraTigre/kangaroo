const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { connect, disconnect } = require('mongoose')
const { sign } = require('jsonwebtoken')
const verifyToken = require('./utils/verifyToken')
const registerParent = require('./logic/registerParent')
const registerNanny = require('./logic/registerNanny')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser= require('./logic/retrieveUser')
const unregisterUser = require('./logic/unregisterUser')
const updateUserPassword = require('./logic/updateUserPassword')
const updateUserEmail = require('./logic/updateUserEmail')
const retrieveParents = require('./logic/retrieveParents')
const retrieveNannies = require('./logic/retrieveNannies')
const retrieveNannyProfile = require('./logic/retrieveNannyProfile')
const retrieveParentProfile = require('./logic/retrieveParentProfile')

const JWT_SECRET = 'lalaland'

const { FormatError, ExistenceError, AuthError, CoherenceError } = require('com')

connect('mongodb://127.0.0.1:27017/kangaroo')

    .then(() => {
        const server = express()
        server.use(cors())
        const jsonBodyParser = bodyParser.json()

        server.post('/users/parent', jsonBodyParser, (req, res) => {
            try {
                const user = req.body
                const { name,city ,email, password, role } = user

                registerParent(name, city,email, password, role)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof CoherenceError) res.status(409)

                        else res.status(500)
                        res.json({ error: error.message })
                    })

            } catch (error) {

                if (error instanceof TypeError || error instanceof RangeError || error instanceof FormatError) res.status(400)
                else res.status(500)
                res.json({ error: error.message })
            }

        })
        server.post('/users/nanny', jsonBodyParser, (req, res) => {
            try {
                const user = req.body
                const { name,city,experience,email, password, role } = user

                registerNanny(name, city,experience,email, password, role)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof CoherenceError) res.status(409)

                        else res.status(500)
                        res.json({ error: error.message })
                    })

            } catch (error) {

                if (error instanceof TypeError || error instanceof RangeError || error instanceof FormatError) res.status(400)
                else res.status(500)
                res.json({ error: error.message })
            }

        })
        server.post('/users/auth', jsonBodyParser, (req, res) => {

            try{
                const credentials = req.body
                const { email, password } = credentials

                authenticateUser(email, password)
                .then(userId => sign({ sub: userId }, JWT_SECRET, { expiresIn: '1h' }))
                .then(token => res.status(200).json({ token }))

                .catch(error => {
                    if (error instanceof ExistenceError) res.status(404)
                    else if (error instanceof AuthError) res.status(401)
                    else res.status(500)


                    res.json({ error: error.message })
                })
            }catch(error){
                if (error instanceof TypeError || error instanceof RangeError|| error instanceof FormatError) res.status(400)
                else res.status(500)
                res.json({ error: error.message })
            }
        
        
        })
        server.get('/users', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveUser(userId)

                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof ExistenceError) res.status(404)
                        else res.status(500)

                        res.json({ error: error.message })
                    })

            } catch (error) {
                if (error instanceof TypeError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }

        })

        server.delete('/users',jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)
                const { password } = req.body

                unregisterUser(userId, password)
                .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof ExistenceError) res.status(404)
                       
                        else if (error instanceof AuthError) res.status(401)
                       
                        else res.status(500)

                        res.json({ error: error.message })
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof RangeError) res.status(400)
                
                else
                    res.status(500)

                res.json({ error: error.message })

            }

            
        })
        server.patch('/users/updatePassword', jsonBodyParser, (req, res) => {

            try {
                const userId = verifyToken(req)

                const credentials = req.body

                const { password, newPassword, newPasswordConfirm } = credentials
                updateUserPassword(userId, password, newPassword, newPasswordConfirm)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof AuthError) res.status(401)
                    else if (error instanceof ExistenceError) res.status(404)
                    else res.status(500)

                    res.json({ error: error.message })})

            } catch (error) {

                if (error instanceof TypeError || error instanceof RangeError|| error instanceof CoherenceError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
                
            }


        })

        server.patch('/users/updateEmail', jsonBodyParser, (req, res) => {
            try {

                const userId = verifyToken(req)

                const credentials = req.body

                const { password, newEmail } = credentials

                updateUserEmail(userId, password, newEmail)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof AuthError) res.status(401)
                    else if (error instanceof ExistenceError) res.status(404)
                    else res.status(500)

                    res.json({ error: error.message })})


            } catch (error) {
                if (error instanceof TypeError || error instanceof RangeError|| error instanceof CoherenceError|| error instanceof FormatError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }


        })
        server.get('/users/parents', (req, res) => {
            try {
                const userId = verifyToken(req)
                

                retrieveParents(userId)

                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof ExistenceError) res.status(404)
                        else res.status(500)

                        res.json({ error: error.message })
                    })

            } catch (error) {
                if (error instanceof TypeError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }

        })

        server.get('/users/nannies', (req, res) => {
            try {
                const userId = verifyToken(req)
                

                retrieveNannies(userId)

                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof ExistenceError) res.status(404)
                        else res.status(500)

                        res.json({ error: error.message })
                    })

            } catch (error) {
                if (error instanceof TypeError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }

        })
        server.get('/nannies/:nannyId', (req, res) => {
            try {
                const userId = verifyToken(req)
                const { nannyId } = req.params

                retrieveNannyProfile(userId, nannyId)

                    .then(nanny => res.json(nanny))
                    .catch(error => {
                        if (error instanceof ExistenceError) res.status(404)
                        else res.status(500)

                        res.json({ error: error.message })
                    })

            } catch (error) {
                if (error instanceof TypeError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }

        })
        server.get('/parents/:parentId', (req, res) => {
            try {
                const userId = verifyToken(req)
                const { parentId } = req.params

                retrieveParentProfile(userId, parentId)

                    .then(parent => res.json(parent))
                    .catch(error => {
                        if (error instanceof ExistenceError) res.status(404)
                        else res.status(500)

                        res.json({ error: error.message })
                    })

            } catch (error) {
                if (error instanceof TypeError) res.status(400)
                else
                    res.status(500)

                res.json({ error: error.message })
            }

        })





        server.listen(8080, () => console.log('server running on port ' + 8080))
    })