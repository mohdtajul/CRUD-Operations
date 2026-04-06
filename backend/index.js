require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')


const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001;



mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));


app.get('/', (req, res) => {
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

app.get("/getUser/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.put("/updateUser/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.json(updatedUser);

    } catch (err) {
        res.status(500).json(err);
    }
});
    

app.delete("/deleteUser/:id", async (req, res) => {
    try {
        const id = req.params.id;

        await UserModel.findByIdAndDelete(id);

        res.json({ message: "User deleted successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})