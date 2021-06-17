import React, { useState } from "react";
import axios from "axios";
import "./Dictonary.css";

export default function Dictonary() {
    let [keyword, setKeyword] = useState("")

    function handleResponse(response){
    console.log(response.data[0])
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
        </div>
    )
}
