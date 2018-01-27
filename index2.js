// index2.js
const axios = require("axios")

/*
const url = "https://blockchain.info/pt/ticker"
axios.get(url).then(ret => console.log(ret.data))
*/

const baseURL = "https://blockchain.info"

const api = axios.create({ baseURL })

const params = { q : "axios" }

api.get("/pt/ticker", { params }).then(ret => console.log(ret.data))