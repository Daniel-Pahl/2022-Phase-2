import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


function App() {
  const [countryInfo, setCountryInfo] 
  = useState<undefined | any>(undefined);
    const [cityName, setCityName] =  useState("");
  const axios = require("axios");
  return (
    <div className="App">
      <h1>
        City facts
      </h1>
      <div>
        <label>Country Code</label><br/>
        <input type="text" id="city-name" name="city-name" onChange={e => setCityName(e.target.value)}/><br/>
        <button onClick={search}>
        Search
        </button>
      </div>

      <p>
        You have entered {cityName}
      </p>
      <div id="city-name">This will show the result</div>

    
    {countryInfo === undefined ?
(
    <p>
        Country not found
    </p>
) :(
    <div id="Country-result">
      <p>
        {countryInfo.capital.name}
        <img src= {countryInfo.flag.file}  />
      </p>
            </div>
  )}
            </div>
);
  
  function search(){
    const options = {
      method: 'GET',
      url: 'https://world-geo-data.p.rapidapi.com/countries/'+cityName,
      params: {language: 'en,de'},
      headers: {
        'X-RapidAPI-Key': '67bcbac557msh59fab0bc5c210e2p12b62ejsnc57fbfe520b0',
        'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response: { data: any; }) {
      console.log(response.data);
      setCountryInfo(response.data);
    }).catch(function (error: any) {
      console.error(error);
    });
  // axios.get('https://world-geo-data.p.rapidapi.com/countries/'+cityName
  // , {params: {'X-RapidAPI-Key' : '67bcbac557msh59fab0bc5c210e2p12b62ejsnc57fbfe520b0'}
  // , 'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'}).then((res: { data: any; })=> {
  //     console.log(res.data);
  //     setCountryInfo(res.data)
  }
  }

export default App;
