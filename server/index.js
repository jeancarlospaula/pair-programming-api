const connectToDatabase = require('./src/database/connection/connect')
const dotenv = require('dotenv')
dotenv.config()

connectToDatabase()

require('../server/modules/express')