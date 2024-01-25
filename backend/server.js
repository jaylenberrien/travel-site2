// require('.dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000 

//middleware
app.use(cors({
  //here you specify the origins that you want to allow request to
  //come from (localhost can be one)
  // origin: 
}))

//we might need the next after res
app.use((req, res,) =>{
  console.log(req.path, req.method)
})

app.get('/test', (req, res)=>{
    res.send('i guess its working')
})

app.listen(PORT, () =>{  
  console.log("listening on port " + PORT)  
})