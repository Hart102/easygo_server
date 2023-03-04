const express = require('express')
const router = express.Router()
const { 
    register, 
    login_auth 
} = require('../Auth/user_auth')
const DbConn = require('../dbConn/conn')

router.post('/api/register', (req, res) => { //user registration
    const { error, value } = register.validate(req.body)
    if (error) return res.json(error.message)
    let user_info = `INSERT INTO users(username, phone, email, password) VALUES (?, ?, ?, ?)`
    DbConn.query(user_info, 
        [
            value.username, 
            value.phone, 
            value.email, 
            value.password
        ], 
        (err, result) => {
        if(err) return res.json('Email already exist')
        let user = `SELECT * FROM users WHERE email="${value.email}"`
        DbConn.query(user, (err, result) => {
            if(err) return console.log('something went wrong')
            // Set user session here
        })
    })
})





router.post('/api/login', (req, res) => { //user login
    const { error, value } = login_auth.validate(req.body)
    if (error) return console.log(error.message)




    // let user = data.find(user => user.email == value.email && user.password == value.password)
    // user ? console.log('A user loggedin') : console.log('User does not exist')
})


module.exports = router