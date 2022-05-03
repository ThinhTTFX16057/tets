import React from "react";
import { Link } from "react-router-dom";

function Hi (){
    return(
        <div>
            <h1>FunctComponent: Hi world</h1>
            <Link to ='/hello'>
            <button>Go to Hello</button>
            </Link>
        </div>
    )
}
export default Hi