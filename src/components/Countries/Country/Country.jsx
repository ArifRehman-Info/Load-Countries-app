import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [visited, setVisited]= useState(false);

    const countVisited = () => {
      
        setVisited(true);
        
    }

    return (
        <div className={`country ${visited && 'countries-visited'}`}>
        <h3>Name: {country.name.common} </h3>
        {/* we can't use like this img src ="inside for dynamic one" */}
        <img src={country.flags.png} alt="" /> 
        <p>Independent: {country.independent ? 'Free': 'Not Free'}</p>
        <p>Population: {country.population} </p>
        <button onClick={countVisited}>{visited? 'Visited': 'Not Visited'}</button>
       
        </div>
    );
};

export default Country;