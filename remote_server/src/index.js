const express          = require('express')
const MongoClient      = require('mongodb').MongoClient
const assert           = require('assert')
const graphqlHTTP      = require('express-graphql')
const schema = require('./graphql/schema.js')

const db_url = 'mongodb://localhost:27017'
const dbName = 'myproject'

const client = new MongoClient(db_url, { useNewUrlParser: true })

// Tests local database connection
client.connect(function(err) {
    assert.equal(null, err)
    console.log("connected successfully to server")
})

// process.env.port is used for Heroku deployment
const port = process.env.port || 8080
const app  = express()

/**
 *  This is for easy reference in the GraphQL route setup on
 */

// graphqlHTTP({
// 	schema: GraphQLSchema,
// 	graphiql?: ?boolean,
// 	rootValue?: ?any,
// 	context?: ?any,
// 	pretty?: ?boolean,
// 	formatError?: ?Function,
// 	validationRules?: ?Array<any>,
// })

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
)

////////////////////////
//
// Pi-related routes
//
////////////////////////
// NOTE: These may become useless

// app.get('/pi/:id/', (req, res) => {
//   res.send("You've hit the Pi's ID route")
// })

// app.get('/pi/:id/photo_stream', (req, res) => {
//   res.send("You've hit the Pi's photo stream route")
// })

// app.get('/', (req, res) => {
//   res.send('Hello, world!')
// })

////////////////////////


app.listen(port, () => {
  console.log('Listening on port ' + port)
})
