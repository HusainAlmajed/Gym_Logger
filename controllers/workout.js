const { render } = require('ejs')
const Workouts = require('../models/workout')
const Exercises = require('../models/exercise')


// For displaying a form to take user input
const showForm = (req , res) => {
    res.render('workouts/new.ejs')
}

// To save in user input into the database
const create = async (req , res) => {
    const workoutData = {}

    workoutData.workoutType = req.body.workoutType 
    workoutData.isDone = req.body.isDone == 'on'
    workoutData.date = req.body.date
    workoutData.owner = req.session.user._id

    let createdWorkout = await Workouts.create(workoutData)

    res.redirect(`/workouts/${createdWorkout._id}/exercises/new`)
}

// to show the workouts
const index = async (req, res) => {
    let workoutData = await Workouts.find({
        owner: req.session.user._id, // so that it only displays workouts created by the user only
    })
    
    res.render('workouts/index.ejs', { 
        workoutData: workoutData,

    })
}

const workoutView = async (req , res) => {
    const foundWorkout = await Workouts.findById(req.params.workoutId).populate('owner')
    const foundExercises = await Exercises.find({
        workout: req.params.workoutId,
    })

    res.render('workouts/workoutsList.ejs' , {
        foundWorkout,
        foundExercises,
    })

}

module.exports = {
    showForm,
    create,
    index,
    workoutView,

}