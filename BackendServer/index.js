const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel= require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://mohdtajul473:zm6XBrhQ39IjT4wi@cluster0.laay9r3.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.get('/', (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
  })
  
  app.post("/createUser", (req, res) => {
    console.log("Received data:", req.body); // 👈 Add this
    UserModel.create(req.body)
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });


app.listen(3001, ()=>{
    console.log("server is running");
})