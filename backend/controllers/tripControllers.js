const Trip = require('../models/Trip')

const createTrip = async(req, res) =>{

    const {name, description} = req.body

    try {
        const trip = await Trip.createNewTrip(name, description)
        res.status(200).json({name, description})
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

//we have the route and we have the static method set up we just need to make the
// hook  using it and set it up in the client


module.exports = {
    createTrip,

}