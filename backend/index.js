const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3000;
const path = require("path")
const mongoose = require("mongoose")
const mongouri = "mongodb+srv://singhmaneshwar08:singh@cluster0.kzv3s.mongodb.net"
const dbname = "planteasycare"
mongoose.connect(`${mongouri}/${dbname}`)
.then((e)=>{
    console.log("mongodb connected")
})
// .catch((e)=>{
//     console.log("error while connecting mongodb")
// })

const userRoute = require("./routes/userroute.js")

app.use(cors())

app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get('/api',(req,res)=>{
//     res.json({message : " testing the api"})
// })
app.use('/user', userRoute)

// app.get('/test',(req,res)=>{
//     res.send("hey")
// })

app.listen(PORT,()=>{
    console.log(`APP listening on ${PORT}`)
})
