const router = require('express').Router()
const{ Workout } = require('../models')

router.get('/',(req,res)=>{
  Workout.find({},(err,items)=>{
    res.json(items)
  })
})

router.put('/:id', (req, res) => {
  // req.body is a new exercise
  Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body }}, 
    { new: true }, (err, item) => {
    if (err) { console.log(err) }
    res.json(item)
  })
})

router.post('/', (req, res) => {
  Workout.create({ day: new Date() }, (err, item) => {
    res.json(item)
  })
})

router.get('/range', (req, res) => {
  Workout.find({}, (err, item) => {
    res.json(item)
  })
})

module.exports = router