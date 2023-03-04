const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const UserRoute  = require('./Modules/Routes/routes')

// Routes 
app.use(UserRoute) // User authentication routes
app.use(UserRoute)


app.listen(6000, () => console.log(`App running on port 6000`))