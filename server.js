var cors = require('cors');
const express = require('express')

const app = express()

app.use(cors())
const PORT = process.env.PORT || 5000
app.use(express.static(__dirname + '/public/'));


app.get('/',(req,res)=>{
  res.json({message:'data in /recording_0.json'})
})

app.listen(PORT,()=>console.log(`listening on port ${PORT}` ))