// require('.dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoConfig = require('./config')
const cors = require('cors')
const PORT = 5000 

require('dotenv').config()


const User = require('../backend/models/User')

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

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// routes
app.get('/', async (req, res)=>{
  res.send('coolio')
})

app.get('/test', async (req, res)=>{
  let searchResult = await fetch(` https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${'detroit'}&language=en&key=${'1899AA92DCE949989AB081910E043CCA'}`)
  searchResult = await searchResult.json()
  console.log(searchResult)
  res.send('i guess its working')
})

app.post('user', async (req, res)=>{
  try {
    // console.log(req.body)
    const result = await User.create({
      username: "testtesttest",
      password: "tester"
    })
    console.log("data saved", result)
  } catch (error) {
    
  }
})

app.listen(PORT, () =>{  
  console.log("listening on port " + PORT)  
  mongoConfig()
})