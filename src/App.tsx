import React from "react";
import { useState } from "react";

import { Root, Root2 } from "./tsTypes/CountryTypes";

import axios from "axios";

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

            {countryInfo === undefined ? (
                <p>Country not found</p>
            ) : (
                <div id="Country-flag">
                    <img src={countryInfo.flags.png} />
                </div>
            )}
        </div>
    );

    function search() {
        {
            countryName !== ""
                ? axios
                      .get(COUNTRIES_URL + countryName.toLowerCase())
                      .then((res) => {
                          setCountryInfo(res.data[0]);
                      })
                      .catch((err) => {
                          console.log("Country not found");
                          setCountryInfo(undefined);
                      })
                : console.log("Can't search null");
        }
    }
}

export default App;
