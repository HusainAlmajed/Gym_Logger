const Exercises = require('../models/exercise')
const Workouts = require('../models/workout')

// To display the form
const showForm = async (req , res) => {
    // to get the specific workout 
    let workout = await Workouts.findById(req.params.workoutId)

    res.render('exercises/new.ejs' , {
        Workouts: Workouts,
        workout: workout,
        Exercises: Exercises,
    })
}

const create = async (req , res) => {
    const exerciseData = {}

    exerciseData.exerciseName = req.body.exerciseName
    exerciseData.weight = req.body.weight
    exerciseData.sets = req.body.sets
    exerciseData.reps = req.body.reps
    exerciseData.workout = req.params.workoutId
    exerciseData.owner = req.session.user._id

    await Exercises.create(exerciseData)
    res.redirect(`/workouts/${req.params.workoutId}`)
}

module.exports = {
    showForm,
    create,

}