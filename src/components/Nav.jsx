import React from "react";
import { ReactComponent as Uni } from "../assets/static/unicorn.svg";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<div className="logo">
				<Uni />
				<span className="logo--text">Shatranj</span>
			</div>
			<div className="options">
				<Link to="/">Play</Link>
				<Link to="/help">Help</Link>
				<Link to="/themes">Themes</Link>
			</div>
			<div className="btns">
				<button>Connect Wallet</button>
			</div>
		</nav>
	);
}
