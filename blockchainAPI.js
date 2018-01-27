const axios = require("axios")

/*
const url = "https://blockchain.info/pt/ticker"
axios.get(url).then(ret => console.log(ret.data))
*/

const baseURL = "https://blockchain.info"

const api = axios.create({ baseURL })

api.get("/pt/ticker")
.then(ret => {
    console.log("BRL currency of BTC = " + ret.data.BRL.last)
})