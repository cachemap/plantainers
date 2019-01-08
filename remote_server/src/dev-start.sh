log_addr=/Users/dnotz/Documents/plantainers/remote_server/database/mongodb.log
db_addr=/Users/dnotz/Documents/plantainers/remote_server/database/


# Launch mongo daemon process
mongod --fork --logpath $log_addr --dbpath $db_addr

node index.js
