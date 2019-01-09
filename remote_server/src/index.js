const express = require('express')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const root = require('./graphql/schema') // TODO: Fix this

const db_url = 'mongodb://localhost:27017'
const dbName = 'myproject'

const client = new MongoClient(db_url, { useNewUrlParser: true })

// Tests local database connection
client.connect(function(err) {
    assert.equal(null, err)
    console.log("connected successfully to server")
})

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

//
// Pi-related routes
//

app.get('/pi/:id/', (req, res) => {
  res.send("You've hit the Pi's ID route")
})

app.get('/pi/:id/photo_stream', (req, res) => {
  res.send("You've hit the Pi's photo stream route")
})



app.listen(port, () => {
  console.log('Listening on port ' + port)
})
