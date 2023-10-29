import React from "react";
import "../../App.css"

export default props=>{
    return(
        <>
            <div className="card pos-relative">
                <img src={`${props.imgSource}`} alt={`${props.imgAlt}`} className="card-img"/>
                <h5 className="pos-abs card-label">{props.label ? props.label : "Nome projeto"}</h5>
            </div>
        </>
    )
}