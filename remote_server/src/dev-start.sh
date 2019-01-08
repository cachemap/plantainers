# Addresses for mongod configuration
log_addr=/Users/dnotz/Documents/plantainers/remote_server/database/mongodb.log
db_addr=/Users/dnotz/Documents/plantainers/remote_server/database/

# TODO: Only launch mongod if an instance isn't already currently running
# Launch mongo daemon process
mongod --fork --logpath $log_addr --dbpath $db_addr

# Launch node server to communicate with Pis and front-end clients
node index.js
