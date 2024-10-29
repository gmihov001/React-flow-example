import React, { useState, useEffect } from "react";
import Card from "./card";

//create your first component
const CardDeck = (props) => {
    return (
        <div className="container">
            <div className="text-center">
                <h2>Characters List</h2>
                <div className="d-flex flex-wrap">
                    {
                        props.movieToCardDeck == "LOTR" ? props.lotrArr.map(
                            (character, ind) => <Card key={ind} char={character} movieToCard={props.movieToCardDeck} />
                        )
                            : props.starwarsArr.map(
                                (character, ind) => <Card key={ind} char={character} movieToCard={props.movieToCardDeck} />
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default CardDeck;
