import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'http://localhost:4000/api/food/search?searchText=';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('sd');
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchText}`);
      const data = await response.json();
      if(data) {
        // console.log(data);
        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
    }catch(err) {
      console.log(err);
    }
    setLoading(false);
  }
  useEffect(() => {
    getSearchResults();
  }, [searchText]);

  return (
    <AppContext.Provider 
      value={{
        loading,
        searchResults,
        setSearchText
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
