const express = require('express')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const db_url = 'mongodb://localhost:27017'
const dbName = 'myproject'

const client = new MongoClient(db_url, { useNewUrlParser: true })

client.connect(function(err) {
    assert.equal(null, err)
    console.log("connected successfully to server")
})

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
