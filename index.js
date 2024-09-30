const express = require('express')
const app = express()

console.log("Compilando....")
app.get('/terrible', function (req, res) {
  res.send(' <h1 > Terrible Compilado</h1')
})

app.listen(3000)