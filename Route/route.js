const express = require('express')
const route = express.Router()
const User = require('../Model')

route.post('/api/v1/login', async (req, res) =>{
   const {username, password, email} = req.body
   console.log(username)
   if(!username || !password || !email){
     return res.status(400).json({msg:"Provide your details"})
  }
  try {
    const user = await User.create({username, password, email})
     return res.status(200).json({response:"connected succefully", user})
   } 
   catch (error) {
    console.log(error);
    res.status(400).json({response:"Sorry you couldn't connect"})
   }
})


module.exports = route