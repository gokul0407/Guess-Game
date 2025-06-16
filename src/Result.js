import React from "react";

function Result({ser, term}){
    let res;

    if(term){
        if(term > ser){
            res = "Higher";
        }
        else if(term < ser){
            res = "Lower"
        }
        else if(term == ser){
            res = 'Wow! You Found it..'
        }
        else{
            res = "Enter valid input"
        }
    }
    
    return (
        <h3>You Guessed : {res}</h3>
    )
}
export default Result;