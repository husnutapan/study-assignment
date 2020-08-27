const mongoose = require('mongoose');
const configJson = require('../config/database.json');

class Database {
    static connect() {
        mongoose.connect(configJson.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch(err => {
            console.error("When reach out to database got error.", err);
        });
    }

    static disconnect() {
        mongoose
            .disconnect()
            .catch(err => {
                `MongoDB connection cannot be disconnected.`, err
            });
    }
}

module.exports = Database