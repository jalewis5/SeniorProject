const dotenv = require("dotenv").config(); //app now has access to .env file
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/TaskModel"); //import task schema

const app = express();

//Middleware used to get access to data
app.use(express.json())

//ROUTES
app.get("/", (req, res) => {
    res.send("Main Page");
});

//Create a Task
app.post("/api/tasks", async (req, res) =>{
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
});

//Using port 4000 for now, see if Github will provide our port number
const PORT = process.env.PORT || 4000;


const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        }); 
    } catch (error) {
        console.log(error)
    }
};
startServer();
//hey