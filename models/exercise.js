const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    exerciseName: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        require: true,
    },
    sets: {
        type: Number,
        require: true,
    },
    reps: {
        type: Number,
        require: true,
    },
    owner: {

    }
})

const Exercises = mongoose.model('Exercises' , exerciseSchema)

module.exports = Exercises