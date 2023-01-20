import React from "react";
import astronauta from './IMGs/astronauta.png'

import './leftStyle.css'

export default () =>{
    return(
        <div className="container-left">
            <div className="card-img">
                <img className="astronauta" src={astronauta} alt="helmet" />
            </div>
        </div>
        
    )
}