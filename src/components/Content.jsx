import React from "react";
import '../App.css'

export default props =>{
    return(
        <>
            <div className="container mt-2">
                {props.children}
            </div>
        </>
    )
}