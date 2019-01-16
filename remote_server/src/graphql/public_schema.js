//////
//
// Contains schema related to publicly available APIs
//
//////

// Send to 'api.graphloc.com'
export const Geolocation = buildSchema(`
	query Geolocation {
		GraphQLSchema {
			country {
				names {
					en
				}
				geoname_id
				iso_code
			}
			location {
				latitude
				longitude
			}
		}
	}	
`)

