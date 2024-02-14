const tripAdvisor = process.env.VITE_TRIPADVISOR;
let storeData
let storePics


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


module.exports = {
  passQuery,
  passPics,

}


