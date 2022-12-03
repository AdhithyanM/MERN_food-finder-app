const express = require('express');
const router = express.Router();
const { 
    getSearchResultFromDB, 
    getSearchResultFromAPI, 
    saveSearchResultToDB 
} = require('../../util/foodUtil');

// @route GET api/food/search
// @description search for a food item and returns the top 5 food with its calories
// @access Public
router.get('/search', async (req, res) => {
    const searchText = req.query.searchText;
    if(searchText.length < 1) {
        return res.status(200).send([]);
    }
    const dbResult = await getSearchResultFromDB(searchText);
    // console.log(dbResult);
    if(dbResult == null) {
        const apiResult = await getSearchResultFromAPI(searchText);
        // console.log(apiResult);
        if(apiResult == null) {
            return res.status(500).send("Internal Error occured!");
        }
        saveSearchResultToDB(searchText, apiResult);
        return res.status(200).send(apiResult);
    }
    return res.status(200).send(dbResult);
});


module.exports = router;