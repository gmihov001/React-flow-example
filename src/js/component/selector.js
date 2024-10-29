import React, { useState, useEffect } from "react";

//create your first component
const Selector = (props) => {
    console.log(props);
    return (
        <div className="container selector">
            <h1>Select Characters</h1>
            <div className="d-flex justify-content-between w-100">
                <div
                    onClick={() => props.setMovie("LOTR")}
                    className="text-center">
                    <h2>Lord of the Rings</h2>
                </div>
                <div
                    onClick={() => props.setMovie("Starwars")}
                    className="text-center">
                    <h2>Starwars</h2>
                </div>
            </div>
        </div>
    );
};


export default Selector;