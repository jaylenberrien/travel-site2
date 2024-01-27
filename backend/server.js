// require('.dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoConfig = require('./config')
const cors = require('cors')
const PORT = 5000 

require('dotenv').config()

const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const apiRoutes = require('./routes/apiRoutes')
const tripRoutes = require('./routes/tripRoutes')


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
  res.send('welcome to the backend')
})



//"listener"

app.listen(PORT, () =>{  
  console.log("listening on port " + PORT)  
  mongoConfig()
})