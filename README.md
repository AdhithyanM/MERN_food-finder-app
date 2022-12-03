# Welcome to Food-Finder

A **MERN Stack Application** that takes food item as input and checks if the search results present in MongoDB. If not present it will retrieve top 5 result from Nutritionix API and cache it in DB and returns to UI..

## Software Required to install locally

1. Node v16.13.0
2. Visual Studio Code
3. MongoDB Atlas account with a cluster to connect 
4. Git

## How to run this project locally:

In order to execute the current project, you have to follow the mentioned steps -

1. > git clone https://github.com/AdhithyanM/food-finder.app.git
2. Open the cloned project in VSCode.
3. Setup the Server.
   Steps for setting up the server:
    1. Navigate to /server folder and execute the command "npm install" in order to install the required node packages.
    2. create a .env file in root folder and add the following data in it and save.

            MONGODB_URI=data
            X_APP_KEY=data
            X_APP_ID=data
            
          - To get data for MONGODB_URI:

                - In your mongoDB atlas, go to cluster that you want to connect.
                - Click connect button and choose Connect Your Application.
                - Copy the connection string and use this as data for MONGODB_URI
                - If your password has special characters, make sure to encode it and specify in the data
          
          - To get data for X_APP_KEY and X_APP_ID:

                - Go to https://developer.nutritionix.com/ and create a account.
                - Go to https://developer.nutritionix.com/admin/access_details
                - Get the data for X_APP_KEY under Application Keys
                - Get the data for X_APP_ID under Application ID 

    3. Run the server by executing "npm run server" command from root folder.

4. Setup the React App.
   Steps for setting up the react app:
    1. Navigate to /webclient folder and execute the command "npm install" in order to install the required node packages.
    2. Run the app by executing the command "npm start".
5. Access the application in browser using the url http://localhost:3000

Then you are good to go!
