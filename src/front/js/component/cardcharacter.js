import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export const CardCharacter = () => {
	const header = (
		<img
			alt="Card"
			src="showcase/demo/images/usercard.png"
			onError={e => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")}
		/>
	);
	const footer = (
		<span>
			<Link to="/">
				<Button label="Learn more!" icon="pi pi-exclamation-circle" />
			</Link>
			<Button
				style={{ marginLeft: "1em" }}
				icon="pi pi-heart"
				className="p-button-secondary p-ml-2 p-button-warning"
			/>
		</span>
	);

	return (
		<div>
			<Card
				title="Nombre"
				style={{ width: "20em", height: "20em;" }}
				className="ui-card-shadow"
				footer={footer}
				header={header}>
				<p className="p-m-0" style={{ lineHeight: "1.5" }}>
					Gender:
				</p>
				<p className="p-m-0" style={{ lineHeight: "1.5" }}>
					Hair Color:
				</p>
				<p className="p-m-0" style={{ lineHeight: "1.5" }}>
					Eye Color:
				</p>
			</Card>
		</div>
	);
};
