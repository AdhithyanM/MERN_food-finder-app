const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchResultSchema = new Schema({
    search_query: {
        type: String,
        required: true
    },
    results: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Food'
        }],
        required: true
    }
});

module.exports = mongoose.model('SearchResult', searchResultSchema);