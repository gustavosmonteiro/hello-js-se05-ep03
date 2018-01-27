// index2.js
const axios = require("axios")

const url = "https://api.github.com/search/repositories?q=axios"

axios.get(url).then(ret => console.log(ret.data))