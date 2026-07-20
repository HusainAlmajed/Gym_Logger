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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Exercises = mongoose.model('Exercises' , exerciseSchema)

module.exports = Exercises