import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictonary.css";


export default function Dictonary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);


    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
    }
    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictonary">
                <section>
                <h1>What are you looking for? </h1>
               <form onSubmit={handleSubmit}>
                   <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} autoFocus={true} />
               </form>
               <div className="hint">
                   suggested words: sunset, wine, yoga, forest, plants...
               </div>
               </section>
               <h1>
               <Results results={results} />
               </h1>
            </div>
        );
    } else {
        load();
        return "Loading"
    }
}