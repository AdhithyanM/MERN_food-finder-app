import React from 'react';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const SearchResult = () => {
    const { searchResults, loading } = useGlobalContext();

    if(loading) {
        return <Loading/>;
    }
    if(searchResults.length < 1) {
        return (
            <div className="h-80 flex justify-center items-center">
                <h4 className="font-bold">
                    No food items matched your search criteria
                </h4>
            </div>
        );
    }
    return (
        <div className="h-80 flex justify-center items-center">
            {/* TO DO */}
            search result table
        </div>
    );
}

export default SearchResult;
