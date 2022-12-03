const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    photo: {
        thumb: {
            type: String,
            required: true
        }
    },
    food_name : {
        type: String,
        required: true
    },
    brand_name : {
        type: String,
        required: true
    },
    serving_qty : {
        type: Number,
        required: true
    },
    nf_calories : {
        type: Number,
        required: true
    }
});

/**
 * mongoose will automatically insert ObjectId which acts as PK for each document.
 * also it takes care of creating collection with plural name of the singular name we specified in schema.
 */

module.exports = mongoose.model('Food', foodSchema);