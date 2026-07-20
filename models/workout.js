const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    workoutType: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        required: true,
    },
    owner:{

    }
})

const Workouts = mongoose.model('Workouts' , workoutSchema)

module.exports = Workouts