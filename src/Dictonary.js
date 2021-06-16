import React, { useState } from "react";
import "./Dictonary.css";

export default function Dictonary() {
    let [keyword, setKeyword] = useState("")

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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
