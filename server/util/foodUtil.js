const axios = require('axios');

// load the models
const FoodModel = require('../database/models/Food');
const SearchResultModel = require('../database/models/SearchResult');

/**
 * returns results from MongoDB if searchText is present or else returns null.
 */
const getSearchResultFromDB = (searchText) => {
    return new Promise(function (resolve, reject) {
        SearchResultModel
            .findOne(
                { search_query : searchText }, 
                { _id : 0, results : 1 }                // only get the results field
            )
            .populate('results', { _id : 0, __v: 0 })   // populate the results field excluding _id, __v fields during population
            .exec((err, doc) => {
                if(err) { 
                    console.log(err);
                    reject(err);
                }
    
                resolve( !doc ? null : doc.results);
            });
    });
}

/**
 * returns top 5 results by hitting Nutrionix API
 */
const getSearchResultFromAPI = (searchText) => {
    const config = {
        params: {
            query: searchText,
            common: false,
            branded: true,
            detailed: false
        },
        headers: {
            'x-app-key' : process.env.X_APP_KEY,
            'x-app-id' : process.env.X_APP_ID
        }
    };

    return new Promise(function (resolve, reject) {
        axios.get('https://trackapi.nutritionix.com/v2/search/instant', config)
            .then((res) => {
                // filter and assign top 5 objects to results
                const searchItems = res.data.branded.slice(0,5);
                let results = searchItems.map(item => {
                    return {
                        photo : item.photo,
                        food_name : item.food_name,
                        brand_name : item.brand_name,
                        serving_qty : item.serving_qty,
                        nf_calories : item.nf_calories
                    }
                });
                resolve(results);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
}

/**
 * saves the search results to MongoDB
 */
const saveSearchResultToDB = (searchText, results) => {
    const search = new SearchResultModel({search_query : searchText});
    results.forEach(item => {
        const foodItem = new FoodModel(item);
        foodItem.save();
        search.results.push(foodItem);
    });
    search.save();
}

module.exports = {
    getSearchResultFromDB,
    getSearchResultFromAPI,
    saveSearchResultToDB
}