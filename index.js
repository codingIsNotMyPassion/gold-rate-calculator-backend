const express = require("express")
const app = express()
require("dotenv").config()
const connectDB = require("./database")

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.get("/", (req,res)=>{
    res.send("Welcome to the gold rate calculator")
})
app.use("/api/prices", require("./routes/priceRoute"))

// PORT LISTEN
const port = process.env.PORT||8000
app.listen(port, ()=>{console.log(`app listening on ${port}`)})