const express = require('express');
const db = require('./Database');
const route = require('./Route/route');
const app = express()
require('dotenv').config()

//middleware

app.use(route)


const port = process.env.PORT || 5000
 const start = () =>{
    db(process.env.url)
    app.listen(port, () => console.log(`The server has connected on ${port}`))
 }

 start()