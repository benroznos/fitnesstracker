const{Schema, model} = require('mongoose')

const Workouts = new Schema({
 day: {
   type:Date,
   required: true
 },
 exercises:[{}]
},{
      timestamps: true, toJSON:{
      virtuals:true
      } 
    })

Workouts.virtual('totalDuration').get(function(){
  return this.exercises.reduce((length,item)=>length + item.duration,0)
})

module.exports = model('workout',Workouts)