// const search = require('../models/search')
// const searches = require('./models/search')
// const tripAdvisor = import.meta.env.VITE_TRIPADVISOR;

// app.get('/call/', async (req, res)=>{
//   let searchResult = await fetch(` https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${'detroit'}category=geos&language=en&key=${'1899AA92DCE949989AB081910E043CCA'}`)
//   searchResult = await searchResult.json()
//   res.send('i guess its working')
// })

const passQuery = async (req, res)=>{
  const searchQuery = req.body.query
  // let searchResult = await fetch(` https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${searchQuery}category=geos&language=en&key=${tripAdvisor}`)
  // searchResult = await searchResult.json()
  console.log(searchResult)
  // console.log(searchQuery)  
}

module.exports = {
  passQuery,
}