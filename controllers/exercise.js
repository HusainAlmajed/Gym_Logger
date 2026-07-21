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

const index = async (req , res) => {
    let exerciseData = await Exercises.find({
        owner: req.session.user._id,
    })
}

const editExercise = async (req , res) => {
    const foundExercises = await Exercises.findById(req.params.exerciseId)
    const foundWorkout = await Workouts.findById(req.params.workoutId).populate('owner')

    res.render('exercises/edit.ejs' , {
        foundExercises: foundExercises,
        foundWorkout: foundWorkout,
    })

}

const updateExercise = async (req, res) => {
    const exerciseData = {}

    exerciseData.exerciseName = req.body.exerciseName
    exerciseData.weight = req.body.weight
    exerciseData.sets = req.body.sets
    exerciseData.reps = req.body.reps

    const updatedExercise = await Exercises.findByIdAndUpdate(req.params.exerciseId, exerciseData)
    res.redirect(`/workouts/${updatedExercise.workout}`)
}

const deleteExercise = async (req , res) => {
    // maybe it will be used to verify user
    // const foundExercises = await Exercises.findById(req.params.exerciseId)
    const workout = req.params.workoutId

    await Exercises.findByIdAndDelete(req.params.exerciseId)
    res.redirect(`workouts/<=% workout %>`)
}

module.exports = {
    showForm,
    create,
    index,
    editExercise,
    updateExercise,
    deleteExercise,

}