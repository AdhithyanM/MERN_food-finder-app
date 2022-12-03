const mongoose = require('mongoose');

// const mongodb_username = encodeURIComponent(process.env.MONGODB_USER);
// const mongodb_password = encodeURIComponent(process.env.MONGODB_PASSWORD);
// const mongodb_dbname = encodeURIComponent(process.env.MONGODB_DBNAME);
// const db = `mongodb+srv://${mongodb_username}:${mongodb_password}@cluster0.5udgl4z.mongodb.net/${mongodb_dbname}?retryWrites=true&w=majority`;

const db = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true 
        });
    } catch (err) {
        console.error(err.message);
    }
};
  
module.exports = connectDB;