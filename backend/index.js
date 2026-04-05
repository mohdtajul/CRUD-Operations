require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel= require('./models/User')


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


  app.get('/', (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
  })
  
  app.post("/createUser", (req, res) => {
    console.log("Received data:", req.body); 
    UserModel.create(req.body)
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });


app.listen(3001, ()=>{
    console.log("server is running");
})