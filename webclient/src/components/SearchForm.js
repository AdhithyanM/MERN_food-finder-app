import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();

  const searchItem = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    setSearchText(searchText);
  };

  return (
    // <section className="section">
      <div className="mt-20 flex flex-col items-center">
        <form onSubmit={searchItem}>
          <div className="flex border border-purple-200 rounded">
              <input
                  type="text"
                  name="searchText"
                  className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter a Food Name"
              />
              <button className="px-4 text-white bg-black border-l rounded" type="submit">
                  Search
              </button>
          </div>
        </form>
      </div>
    // </section>
  );
}

export default SearchForm;
