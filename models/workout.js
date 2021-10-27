const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
type: {
    type: String,
    trim: true,
    required: "Enter a workout type"
    },
name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
duration: {
    type: Number,
    trim: true,
    required: "Enter a workout duration in minutes"
    },
weight: {
    type: Number,
    trim: true,
    required: "Enter a weight in pounds"
},
reps: {
    type: Number,
    trim: true,
    required: "Enter the number of reps"
},
sets: {
    type: Number,
    trim: true,
    required: "Enter the number of sets"
}
});

const Workout = mongoose.model("Workout", workoutSchema); 

module.exports = Workout;
