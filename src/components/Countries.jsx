import React, { use } from 'react';
import Country from './Countries/Country/Country';

const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise);

    console.log(countries);
    return (
        <div>
            <h2>Traveling Countries:{countries.length}</h2>
            {

                countries.map(country => <Country key={country.cca3} country ={country}></Country>)
            }
        </div>
    );
};

export default Countries;
