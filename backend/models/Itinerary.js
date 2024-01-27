const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const initerarySchema = new Schema({
    type: mongoose.Types.ObjectId,
}, {timestamps: true})

const Initerary = mongoose.model("itinerary", initerarySchema)

module.exports = Initerary
