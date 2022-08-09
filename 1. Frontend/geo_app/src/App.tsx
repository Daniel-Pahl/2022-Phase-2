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
    <div id = "full" className="App">
      <h1>Country Information</h1>
      <div>
        <TextField
          id="search-bar"
          className="text"
          value={cityName}
          onChange={(prop: any)=> {setCityName(prop.
            target.value)
          }}
          label="Enter a country code."
          variant="outlined"
          placeholder="Search"
          size = "small"
          />
        <IconButton
        aria-label='Search'
        onClick={() =>{
          search();
        }}> 
          <SearchIcon style={{fill: "white"}} />
        </IconButton>
      </div>

      {/* <p>
        You have entered {cityName.toUpperCase()}
      </p> */}

      <div id="background"></div>
    
    {countryInfo === undefined ?
(
    <p>
        Country not found
    </p>
) :(
    <div id="Country-result">
      <img id = "flagLeft" src= {countryInfo.flag.file}/>
      <p id="Name"><mark>Country: {countryInfo.name}</mark></p>
      <p id= "Capital">
        <mark>Capital City: {countryInfo.capital.name}</mark>
      </p>  
      <p id = "Population">
        <mark>Population: {(countryInfo.population / 1000000).toFixed(2)} million</mark>
      </p>
      <p id = "Currency">
        <mark>Currency: {countryInfo.currency.name}</mark>
      </p>
      <a id = "wiki" href= {countryInfo.wiki_url} > {countryInfo.name} wiki </a>
            </div>
  )}
            </div>
  )
  
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
function round(arg0: number, arg1: number): React.ReactNode {
  throw new Error('Function not implemented.');
}

