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
        <div className="mt-10 flex justify-center items-center">
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border-solid border-2 border-zinc-500 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    {tableHeader()}
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {tableData(searchResults)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const tableHeader = () => {
    return (
        <tr>
            <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
                Photo
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
            >
                Name
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
            >
                Brand
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
            >
                Serving Quantity
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
            >
                Calories
            </th>
        </tr>
    );
}

const tableData = (searchResults) => {
    return searchResults.map((item) => {
        return (
            <tr>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    <img src={item.photo.thumb} className="w-[50px] h-[50px]" alt="food-img" />
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.food_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.brand_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.serving_qty}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {item.nf_calories}
                </td>
            </tr>
        );
    });
}

export default SearchResult;
