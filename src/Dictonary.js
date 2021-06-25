import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictonary.css";


export default function Dictonary() {
    let [keyword, setKeyword] = useState(" ")
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }



    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
    }
     


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        
    }
    return (
        <div className="Dictonary"> 
           <form onSubmit={search}>
               <input type="search" onChange={handleKeywordChange} autoFocus={true} />
           </form>
           <h1>
           <Results results={results} />
           </h1>
        </div>
    )
}