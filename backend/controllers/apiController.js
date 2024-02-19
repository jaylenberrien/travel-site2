const tripAdvisor = process.env.VITE_TRIPADVISOR;
let storeData
let storePics
let storeBio
let storeLocation
let storeRestaurants


const passQuery = async (req, res)=>{
  const searchQuery = req.body.query
  let searchResult = await fetch(` https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${searchQuery}&category=geos&language=en&key=${tripAdvisor}`)
  storeData = await searchResult.json()

  console.log(storeData)
  res.json({ originalData: storeData });
  
}

const passPics = async (req, res)=>{
  const code = req.body.locationId
  let callPics = await fetch(`https://api.content.tripadvisor.com/api/v1/location/${code}/photos?key=${tripAdvisor}&language=en'`)
  storePics = await callPics.json()
  console.log(storePics)
  res.json({ picData: storePics })
}

 const passBio = async (req, res)=>{
  const code = req.body.locationId
  let callBio = await fetch(`https://api.content.tripadvisor.com/api/v1/location/${code}/details?key=${tripAdvisor}&language=en&currency=USD`,)
  storeBio = await callBio.json()
  console.log(storeBio)
  res.json({ bioData: storeBio })
 }

 const passLocation = async (req, res)=>{
  const code = req.body.locationId
  let callLocation = await fetch(`https://api.content.tripadvisor.com/api/v1/location/${code}/details?key=${tripAdvisor}&language=en&currency=USD`)
  storeLocation = await callLocation.json()
  console.log(storeLocation)
  res.json({ locationData : storeLocation})

 }

 const passRestaurants = async (req, res)=>{
  const code = req.body.locationInfo
  let callRestuarants = await fetch(`https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${code}&key=${tripAdvisor}&category=restaurants&language=en`)
  storeRestaurants = await callRestuarants.json()
  console.log(storeRestaurants)
  res.json({ restaurantData : storeRestaurants})
}



module.exports = {
  passQuery,
  passPics,
  passBio,
  passLocation,
  passRestaurants

}


