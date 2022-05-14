import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1 style={{color:'blueviolet'}}>Hello World!!! Explore with us...</h1>
            <div className='countries'>
            {
                // countries.map(country => <Country name={country.name.common} area={country.area} population={country.population} flags={country.flags.svg}></Country>)
                //pass country for all infos are in one
                countries.map(country => <Country country={country} key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;