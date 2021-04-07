const mongoose = require('mongoose');

async function connectDb(){
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('mongo connected: ' + conn.connection.host);
    } catch(err) {
        console.error(err);
    }
}

module.exports = connectDb;