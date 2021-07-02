import React from "react";

export default function Photos(props){
    console.log(props.photos)
    if (props.photos) { 
     return "hello from Photos";
    } else {
        return null;
    }     
}