import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictonary.css";

export default function Dictonary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);


    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos)
    }

    function search() {
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
            axios.get(apiUrl).then(handleResponse);
            let pexelsAPIKey =
              "563492ad6f917000010000017839b59841ea4625893af164578bf2ef";
            let pexelsAPIURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
            let headers = { Authorization: `Bearer ${pexelsAPIKey}` };
            axios.get(pexelsAPIURL, { headers: headers }).then(handlePexelsResponse);
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
               <Photos photos={photos} />
               </h1>
            </div>
        );
    } else {
        load();
        return "Loading"
    }
}