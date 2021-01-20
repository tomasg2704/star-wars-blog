import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { CardCharacter } from "../component/cardcharacter";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<br />
			<CardCharacter />
		</div>
	);
};
