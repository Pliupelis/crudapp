const express = require("express")
const app = express()
const path = require("path")
const dotenv = require("dotenv")
const morgan = require("morgan")
const { set, connection } = require("mongoose")
const route = express.Router()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
const connectDB = require('./server/database/connection')

//log req
app.use(morgan("tiny"))

//mongodb connection
connectDB()

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

//load routers
app.use('/', require('./server/routes/router'))
app.listen(PORT,()=>{console.log(`running ${PORT}`)})