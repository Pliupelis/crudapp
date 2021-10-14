const express = require("express")
const app = express()
const path = require("path")
const dotenv = require("dotenv")
const morgan = require("morgan")
const { set } = require("mongoose")
const route = express.Router()
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
//log req
app.use(morgan("tiny"))
app.use(express.json());
app.use(express.urlencoded({
  extended: true }))

//set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//load static assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))



app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/add-user', (req, res)=>{
    res.render('user')
})
app.listen(PORT,()=>{console.log(`running ${PORT}`)})