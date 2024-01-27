const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema ({
    title: {type:String},
    description: {type:String},
        //things that will be added to the trip(itenerary or however you spell it)
    initerary:[{
        type: mongoose.Types.ObjectId,
        ref: "itinerary",
    }]
    
}
, {timestamps:true,})

const Trip = mongoose.model('trips', tripSchema)

module.exports = Trip