import React from "react";
import Board from "./Chessboard";

import { ReactComponent as Send } from "../assets/static/send.svg";
import { ReactComponent as WhiteKing } from "../assets/chess_svgs/white_king.svg";
import { ReactComponent as WhiteKnight } from "../assets/chess_svgs/white_knight.svg";
import { ReactComponent as WhiteQueen } from "../assets/chess_svgs/white_queen.svg";
import { ReactComponent as WhiteBishop } from "../assets/chess_svgs/white_bishop.svg";
import { ReactComponent as WhiteRook } from "../assets/chess_svgs/white_rook.svg";
import { ReactComponent as WhitePawn } from "../assets/chess_svgs/white_pawn.svg";
import { ReactComponent as BlackKing } from "../assets/chess_svgs/black_king.svg";
import { ReactComponent as BlackKnight } from "../assets/chess_svgs/black_knight.svg";
import { ReactComponent as BlackQueen } from "../assets/chess_svgs/black_queen.svg";
import { ReactComponent as BlackBishop } from "../assets/chess_svgs/black_bishop.svg";
import { ReactComponent as BlackRook } from "../assets/chess_svgs/black_rook.svg";
import { ReactComponent as BlackPawn } from "../assets/chess_svgs/black_pawn.svg";

import "../assets/styles/game.scss";

export default function Game() {
	return (
		<div className="game">
			<section className="game-btns">
				<div className="prize-pool">
					<span className="label">Prize Pool</span>
					<div className="prize">
						<span className="amount">20</span>
						<span className="ghd">GHD</span>
					</div>
				</div>

				<div className="chat">
					<div className="chat-text"></div>
					<div className="chat-input">
						<input type="text" />
						<button>
							<Send />
						</button>
					</div>
				</div>

				<div className="btns">
					<button>Button1</button>
					<button>Button2</button>
					<button>Button3</button>
					<button className="danger">Button4</button>
				</div>
			</section>
			<section className="chessboard">
				<Board boardWidth={700} />
			</section>
			<section className="game-info">
				<div className="players self">
					<dic className="player-info">
						<img
							src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
							alt=""
						/>
						<div className="info">
							<div className="username">You</div>
							<div className="ilo">1456</div>
						</div>
					</dic>

					<div className="fallen-peice fallen-peice-self">
						<WhiteRook size={20} />
						<WhiteKnight size={20} />
						<WhiteBishop size={20} />
					</div>
				</div>
				<div className="pgn"></div>
				<div className="players op">
					<div className="fallen-peice fallen-peice-op">
						<BlackPawn />
						<BlackQueen />
						<BlackKing />
					</div>

					<div className="player-info">
						<img
							src="https://randomuser.me/api/portraits/thumb/men/5.jpg"
							alt=""
						/>
						<div className="info">
							<div className="username">Dave</div>
							<div className="ilo">1456</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
