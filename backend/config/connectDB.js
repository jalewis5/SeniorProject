//Code for connecting to the database
const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        //connect using .env 
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected`);
    } catch (error) {
        //Currently we will log the error and exit the process if MongoDB fails to connect
        console.log(error);
        process.exit(1);
    }

};

//export the file
module.exports = connectDB;