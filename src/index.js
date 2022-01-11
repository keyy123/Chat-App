const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

app.listen(port, ()=>{
    console.log("listening at http://localhost:3000")
})