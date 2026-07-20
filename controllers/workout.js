const { render } = require('ejs')
const Workouts = require('../models/workout')

const showForm = (req , res) => {
    res.render('workouts/new.ejs')
}

module.exports = {
    showForm,

}