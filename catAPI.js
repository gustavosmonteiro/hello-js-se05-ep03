const axios = require('axios')
const express = require('express')
const app = express()

const api = axios.create({
    baseURL: 'http://thecatapi.com'
})

const params = { format: 'html' }

app.get('/showCat', (request, response) =>
    api.get('/api/images/get', { params })
        .then(ret => response.send(ret.data)
    )
)

app.listen(5000, _=> console.log('online'))

//http://localhost:5000/showCat