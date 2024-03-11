import { useEffect, useState } from "react";
import Country from "../coutry/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [markCountries, setMarkCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const markAsVisites = (country) => {
        setMarkCountries([...markCountries, country]);
    }

    return (
        <div>
            <h1>Rest Countries</h1>
            <h3>Visited {markCountries.length} country</h3>
            <div className="country-container">
                {
                    countries.map(country => {
                        return (
                            <Country markAsVisites= {markAsVisites} country={country} key={country.name.common} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Countries;