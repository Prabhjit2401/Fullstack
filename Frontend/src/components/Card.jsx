import React from "react";

function Card(){
    return(
        <form>
            <input type="text" placeholder="name"></input>
            <input type="text" placeholder="address"></input>
            <button type="submit" >Add</button>
        </form>
    );
}

export default Card;