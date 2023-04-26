const { ServerDescription } = require("mongodb");
const mongoose = require("mongoose");


//Creating the model for what each task needs to have
const taskSchema = mongoose.Schema(
    {
        user: {
            type: String, 
            required: true
        },
        name:{
            type: String, 
            required: [true, "Please enter a task name."]
        }, 
        completed:{
            type: Boolean, 
            required: true, 
            default: false
        },
        description:{
            type: String, 
            default: "None"
        },
        tags:{
            type: String,
            default: "None"
        }, 
        priority:{
            type: String,
            default: "None"
        }, 
        dateDue:{
            type: Date,
            default: Date.now()
        },
        timeDue:{
            type: Date,
            default: Date.now()
        }
        //Stretch goal: Collaborators attribute for shared tasks
    },
    {
        timestamps: true //adds timestamps to each record, time of creation and update
    }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;