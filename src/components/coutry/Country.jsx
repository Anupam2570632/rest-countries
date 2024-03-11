import { useState } from 'react';
import './country.css'


const Country = ({ country, markAsVisites }) => {

    const [visited, setVisited] = useState(false);

    return (
        <div className={visited ? "markVisited" : "country"}>
            <h3>Name : {country.name.common}</h3>
            <h4>{country.altSpellings[1]}</h4>
            <img src={country.flags.png} alt={country.flags.alt} />
            <p>Maps : <a href={country.maps.googleMaps}>{country.maps.googleMaps}</a></p>
            <p>Capital : {country.capital}</p>
            <button onClick={() => setVisited(!visited)}>{visited ? "Visited" : "Not visited"}</button>
            <br /> <br />
            <button onClick={() => markAsVisites(country)}>Mark As Visited</button>
        </div>
    );
};

export default Country;