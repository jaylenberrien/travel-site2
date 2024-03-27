const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tripSchema = new Schema ({
    name: {type:String,
        required: true
    },
    description: {type:String},
        //things that will be added to the trip(itenerary or however you spell it)
    itinerary:[{
        type: mongoose.Types.ObjectId,
        ref: "itinerary",
    }]
    
}
, {timestamps:true,})

tripSchema.statics.createNewTrip = async function (name, description){
    if (!name){
        throw Error("Name field must be filled")
    }

    const Trip = await this.create({
        name,
        description
    })

    return Trip
}

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip