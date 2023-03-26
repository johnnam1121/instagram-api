const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/insta', (req, res) => {
    axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${process.env.REACT_APP_INS_TOKEN}`)
        .then((response) => {
            res.json(response.data)
        }).catch((error) => {
            console.log('error', error)
        })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
