// get the environmental variables
require('dotenv').config();

// import the required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// connect to Database.
const mongoose = require('mongoose');
const connectDB = require('./database/config/db');
connectDB();

// express app configurations.
const app = express();
app.use(cors());
app.use(bodyParser.json());

/* routes starts here */
app.get("/", (req,res) => res.send("Home page url"));
/* routes ends here */

// listen to SERVER_PORT once mongoose made connection to mongoDB
const PORT = process.env.SERVER_PORT || 4000;
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");    
    app.listen(PORT, function() {
        console.log("Server is running on Port: " + PORT);
    });
})