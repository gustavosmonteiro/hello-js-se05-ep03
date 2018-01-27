// index.js
const express = require("express")
const app = express()

app.get("/hello/:id", (req, res) => {
  console.log(req.params)
  res.send(`Hello, ${req.query.name}!!!, id=${req.params.id}`)
})

app.listen(3000)
console.log("server online!")