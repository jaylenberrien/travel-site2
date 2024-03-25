const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    type: mongoose.Types.ObjectId,
}, {timestamps: true})

const Itinerary = mongoose.model("itinerary", itinerarySchema)

module.exports = Itinerary
