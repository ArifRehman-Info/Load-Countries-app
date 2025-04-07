import React from 'react';

const Country = ({country}) => {

    console.log(country);
    return (
        <div>
        <h3>Name: {country.name.common} </h3>
        {/* we can't use like this img src ="inside for dynamic one" */}
        <img src={country.flags.png} alt="" /> 
        <p>Independent: {country.independent ? 'Free': 'Not Free'}</p>
        <p>Population: {country.population} </p>
       
        </div>
    );
};

export default Country;