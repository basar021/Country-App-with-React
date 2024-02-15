import React, { useEffect, useState } from 'react';

import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';

/*
|-----------------------------------------
|   Resourses: https://restcountries.com
|   ## Country App Making Step
|
| step 1: basic structure setup -> npm i uuid
| step 2: fetch data
| step 3: display data
| step 4: remove country functionality
| step 5: search country functionality
|-----------------------------------------
*/

// All countries api link
const url = 'https://restcountries.com/v3.1/all';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetchData
    const fetchData = async (url) => {
        setIsLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setFilteredCountries(data);
            setIsLoading(false);
            setError(null);
            // console.log(data);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, []);

    // handleRemoveCountry
    const handleRemoveCountry = (name) => {
        const filter = filteredCountries.filter((country) => country.name.common !== name);
        return setFilteredCountries(filter);
    };

    // handleSearch
    const handleSearch = (searchValue) => {
        let value = searchValue.toLowerCase();

        const newCountries = filteredCountries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });

        setFilteredCountries(newCountries);
    };

    return (
        <div>
            <h1>Country App</h1>
            <Search onSearch={handleSearch} />

            {isLoading && <h3>Country App is loading...</h3>}
            {error && <h3>{error}</h3>}

            {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
        </div>
    );
};
export default App;
