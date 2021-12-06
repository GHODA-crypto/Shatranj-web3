import React, { useState } from "react";
import Nav from "./Nav.jsx";
import { ReactComponent as Uni } from "../assets/static/unicorn.svg";

const Lobby = () => {
	const [currentPage, setCurrentPage] = useState("ambani");

	return (
		<div className="lobby">
			<Nav />
			<div className="lobby-table">
				<div className="challenges-table">
					<div className="game-option">
						<div className="ambani">Ambani Pro</div>
						<div className="practice">Practice</div>
						<div className="Leaderboard">Ambani Pro</div>
					</div>
					<div className="separator"></div>
					<div className="labels"></div>
				</div>
				<div className="create-btns">
					<button>Get $GHODA</button>
					<button>
						<Uni />
						<span>Create Challenge</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Lobby;
