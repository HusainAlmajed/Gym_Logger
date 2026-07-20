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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    }
})

const Workouts = mongoose.model('Workouts' , workoutSchema)

module.exports = Workouts