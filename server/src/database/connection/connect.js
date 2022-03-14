const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@db-pair-programming.a8yjo.mongodb.net/database?retryWrites=true&w=majority`,
        (error) => {
            if(error) throw error

            return console.log('Database connected')
        }
    )
}

module.exports = connectToDatabase