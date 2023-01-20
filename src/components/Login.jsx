import React from "react";

import './loginStyle.css'

export default (props) =>{
    return(
        <div className="card">
            <div className="contents">{props.children}</div>
        </div>
    )
}