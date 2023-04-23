const dotenv = require("dotenv").config(); //app now has access to .env file
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();


//ROUTES
app.get("/", (req, res) => {
    res.send("Main Page");
});

//Create a Task
app.post("/api/tasks", async (req, res) =>{
    console.log(req.body);
    res.send("Task created");
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