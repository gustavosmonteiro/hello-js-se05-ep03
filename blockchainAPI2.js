const axios = require("axios")

const baseURL = "https://blockchain.info"

const api = axios.create({ baseURL })

api.get("/tobtc?currency=BRL&value=1")
.then(ret => console.log("R$1,00 = " + ret.data + " BTC"))
.catch(err => console.log(err.response))