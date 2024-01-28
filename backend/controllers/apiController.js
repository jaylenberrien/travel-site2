const search = require('../models/search')
const searches = require('./models/search')

app.get('/call/', async (req, res)=>{
    let searchResult = await fetch(` https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${'detroit'}category=geos&language=en&key=${'1899AA92DCE949989AB081910E043CCA'}`)
    searchResult = await searchResult.json()
    console.log(searchResult)
    res.send('i guess its working')
  })

  app.post('/api/search', async (req, res)=>{
    console.log(req.body)
    search.push(req.body)
    console.log(search)
  })