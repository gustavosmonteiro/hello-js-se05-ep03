const axios = require("axios")

const baseURL = "https://api.github.com"

const api = axios.create({ baseURL })

let username = 'gustavosmonteiro'

api.get(`/users/${ username }/followers`)
.then(ret => console.log(ret.data))
.catch(err => console.log(err.response))