let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let PORT = process.env.PORT || 3000

// Set up the express app to handle data parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: "application/vnd.api+json" }))

// Static directory
app.use(express.static("app/public"))

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
