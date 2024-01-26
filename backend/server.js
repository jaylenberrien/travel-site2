// require('.dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000 

require('dotenv').config()


//middleware
app.use(cors({
  origin:'http://localhost:5173',
  methods: 'GET, HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use((req, res, next) =>{
  console.log(req.path, req.method)
  next()
})

app.get('/test', async (req, res)=>{
  let searchResult = await fetch(` https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${'detroit'}&language=en&key=${'1899AA92DCE949989AB081910E043CCA'}`)
  searchResult = await searchResult.json()
  console.log(searchResult)
  res.send('i guess its working')
})

app.listen(PORT, () =>{  
  console.log("listening on port " + PORT)  
})