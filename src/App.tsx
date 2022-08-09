import React from "react";
import { useState } from "react";

import { Root, Root2 } from "./tsTypes/CountryTypes";

import logo from "./logo.svg";
import "./App.css";

function App() {
    const [countryName, setCountryName] = useState("");
    const [countryInfo, setCountryInfo] = useState<undefined | Root2>(
        undefined
    );

    const COUNTRIES_URL = "https://restcountries.com/v3.1/name/";

    return (
        <div>
            <h1>Country Search</h1>

            <div>
                <label>Country Name</label>
                <br />
                <input
                    type="text"
                    id="country-name"
                    name="country-name"
                    onChange={(e) => setCountryName(e.target.value)}
                />
                <br />
                <button onClick={search}>Search</button>
            </div>

            <p>You have entered {countryName}</p>
        </div>
    );

    function search() {
        alert("Search button has been clicked!");
    }
}

export default App;
