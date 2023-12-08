const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${process.env.PORT}`)
})