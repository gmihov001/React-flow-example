import React, { useState, useEffect } from "react";

//create your first component
const Card = (props) => {
    let { movieToCard, char } = props;
    console.log(props.char);

    return (
        <div className="container">
            <div className="text-center">
                {props.movieToCard == "LOTR" ? (
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title my-5">{props.char.name}</h4>
                            <h5 className="card-text"><span>Race:</span> {props.char.race}</h5>
                            <h5 className="card-text"><span>Role:</span> {props.char.role}</h5>
                            <h5></h5>
                        </div>
                    </div>
                )
                    : (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title my-5">{props.char.name}</h4>
                                <h5 className="card-text"><span>Side</span>: {props.char.side}</h5>
                                <h5 className="card-text"><span>Lightsaber Color</span>: {props.char.lightsaberColor}</h5>
                                <h5></h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Card;
