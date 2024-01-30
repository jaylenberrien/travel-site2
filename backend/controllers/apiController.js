const tripAdvisor = process.env.VITE_TRIPADVISOR;
let storeData


const passQuery = async (req, res)=>{
  const searchQuery = req.body.query
  let searchResult = await fetch(` https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${searchQuery}&category=geos&language=en&key=${tripAdvisor}`)
  storeData = await searchResult.json()

  console.log(storeData)
  res.json({ originalData: storeData });
  
}



module.exports = {
  passQuery,

}


