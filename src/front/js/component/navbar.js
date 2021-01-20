import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";

export const Navbar = () => {
	const toast = useRef(null);

	const items = [
		{
			label: "Character 1",
			icon: "pi pi-times",
			command: () => {
				deleteFavorites();
			}
		}
	];

	const deleteFavorites = () => {
		toast.current.show({ severity: "success", summary: "Delete", detail: "Data Deleted" });
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}

				<div>
					<Toast ref={toast} />
					<div className="card">
						<SplitButton label="Favorites" icon="pi pi-heart" model={items} />
					</div>
				</div>
			</div>
		</nav>
	);
};
