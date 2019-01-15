//const graphqlHTTP = require('express-graphql')
const axios = require('axios')

const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
	GraphQLSchema
} = require('graphql')

// Today's Weather
// const weatherToday = new GraphQLObjectType({
// 	name: 'weatherToday',
// 	fields: () => ({
// 		date_local:    { type: GraphQLInt },
// 		city_name:     { type: GraphQLInt },
// 		temperature:   { type: GraphQLInt },
// 		precipitation: { type: GraphQLInt }
// 	})
// })

const weatherOfDate = new GraphQLObjectType({
	name: 'weatherOfDate',
	fields: () => ({
		city_name:     { type: GraphQLInt },
		temperature:   { type: GraphQLInt },
		precipitation: { type: GraphQLInt }
	})
})

// TODO: Add this route?
//const weatherOfWeek = 


// Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		weather: {
			type: new GraphQLList(weatherOfDate),
			resolve(parent, args) {
				return axios
					.get('api.openweathermap.org/data/2.5/weather?q=Atlanta')
					.then(res => res.data)
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})