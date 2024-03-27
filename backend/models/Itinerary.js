const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    
    items:[{
        type: mongoose.Types.ObjectId,
    }]
        
}, {timestamps: true})

itinerarySchema.statics.addToItinerary = async function (){
    
    const  item = await this.create({
        //there are variables that we would need to add here
        // and in other places, it would prolly just be names and pictures
    })

    return item
}

const Itinerary = mongoose.model("itinerary", itinerarySchema)

module.exports = Itinerary
