import React, { useState, useEffect } from "react";
import Selector from "./selector";
import Card from "./card";
import CardDeck from "./card-deck";


const Home = () => {

	const starwars = [
		{
			name: "Luke Skywalker",
			side: "light",
			lightsaberColor: "green"
		},
		{
			name: "Darth Vader",
			side: "dark",
			lightsaberColor: "red"
		},
		{
			name: "Yoda",
			side: "light",
			lightsaberColor: "green"
		},
		{
			name: "Obi-Wan Kenobi",
			side: "light",
			lightsaberColor: "blue"
		}
	];

	const lotr = [
		{
			name: "Frodo Baggins",
			race: "Hobbit",
			role: "Ring-bearer"
		},
		{
			name: "Gandalf",
			race: "Wizard",
			role: "Leader"
		},
		{
			name: "Aragorn",
			race: "Man",
			role: "Ranger, King of Gondor"
		},
		{
			name: "Legolas",
			race: "Elf",
			role: "Archer"
		},
		{
			name: "Gimli",
			race: "Dwarf",
			role: "Warrior"
		},
		{
			name: "Samwise Gamgee",
			race: "Hobbit",
			role: "Gardener, Frodo's companion"
		}
	];

	const [movie, setMovie] = useState("");

	return (
		<div className="container">
			<div className="text-center">
				<h1>Movie Characters</h1>
				{
					movie == "" ?
						(<Selector movie={movie} setMovie={setMovie} />)
						: (
							<CardDeck movieToCardDeck={movie} starwarsArr={starwars} lotrArr={lotr} />
						)
				}
			</div>
		</div>
	);
};

export default Home;
