//require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!3')
})
app.get('/tweeter', (req, res) => {
        res.send('tweter localhost')
    })
    // app.get('/login', (req, res) => {
    //     res.send('< h1 > login chai and backend < /h1>')
    // })

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})