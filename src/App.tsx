import React from "react";
import { useState } from "react";

import { Root, Root2 } from "./tsTypes/CountryTypes";

import axios from "axios";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Paper, TextField } from "@mui/material";

import "./App.css";

function App() {
    const [countryName, setCountryName] = useState("");
    const [countryInfo, setCountryInfo] = useState<undefined | Root2>(
        undefined
    );

    const COUNTRIES_URL = "https://restcountries.com/v3.1/name/";

    return (
        <div>
            <div className="search-field">
                <h1 className="App-header">Country Search</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                        id="search-bar"
                        className="text"
                        value={countryName}
                        onChange={(prop: any) => {
                            setCountryName(prop.target.value);
                        }}
                        label="Enter a country name"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        style={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                        }}
                    />
                    <IconButton
                        aria-label="search"
                        onClick={() => {
                            search();
                        }}
                    >
                        <SearchIcon style={{ fill: "black" }} />
                    </IconButton>
                </div>
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
