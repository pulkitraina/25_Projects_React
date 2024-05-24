import React, { useEffect, useState } from "react";
import './index.css';

function Square({ind, txt, setTxt, check, isCross, setIsCross}){
	function handleClick(){
		if(!txt[ind]){
			setTxt((prev) => {
				const newSqs = [...prev];
				newSqs[ind] = isCross ? "X" : "O";
				return newSqs;
			});
		}

		check();
	}

	useEffect(() => {
		check();
		setIsCross((prev) => !prev);
	}, [txt]);
	// Very important useEffect is as it ensures synchronous update of state variables


	return (
		<button className="tic-tac-toe-btn" onClick={handleClick}>{txt[ind] ? txt[ind] : ""}</button>
	);
}

export default function TicTacToe(){
	const [data, setData] = useState(new Array(9).fill(null));
	const [winner, setWinner] = useState(null);
	const [isCross, setIsCross] = useState(true);

	function checkWinner(){
		for(var i = 0; i<3; i++){
			// check horizontal
			if(data[i*3] && (data[i*3] === data[i*3+1]) && (data[i*3+2] === data[i*3+1])){
				setWinner((prev) => data[i*3]);
				setIsCross(true);
				return;
			}

			// check vertical
			if(data[i] && (data[i] === data[i+3]) && (data[i+6] === data[i+3])){
				setWinner((prev) => data[i]);
				setIsCross(true);
				return;
			}
		}

		if(data[0] && (data[0] === data[4]) && (data[4] === data[8])){
			setWinner((prev) => data[0]);
			setIsCross(true);
			return;
		}

		if(data[2] && (data[2] === data[4]) && (data[4] === data[6])){
			setWinner((prev) => data[2]);
			setIsCross(true);
			return;
		}

		let draw = true;
		for(var i = 0; i<9; i++) if(!data[i]){
			draw = false;
			break;
		}

		if(draw){
			setWinner(2);
			return;
		}
	}

	return (
		<>
			TIC-TAC-TOE
			<div className="tic-tac-toe-container">
				<div className="tic-tac-toe-board" style={{display: winner ? "none": "flex"}}>
					<div className="tic-tac-toe-row">
						<Square ind = {0} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
						<Square ind = {1} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
						<Square ind = {2} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
					</div>
					<div className="tic-tac-toe-row">
						<Square ind = {3} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
						<Square ind = {4} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
						<Square ind = {5} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
					</div>
					<div className="tic-tac-toe-row">
						<Square ind = {6} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
						<Square ind = {7} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
						<Square ind = {8} txt = {data} setTxt = {setData} check = {checkWinner} isCross = {isCross} setIsCross = {setIsCross}/>
					</div>
					<span>Next player is: {isCross ? "X" : "O"}</span>
				</div>
				<div className="tic-tac-toe-winner">
					{
						(winner==='X') || (winner==='O') ? 
						<>
							<div>CONGRATS! {winner} WON</div>
							<button className="tic-tac-toe-btn" onClick={() => {
								setData(new Array(9).fill(null));
								setWinner(null);
							}}>Reset</button>
						</>
						: (winner===2 ? <div>Match Tied!<button className="tic-tac-toe-btn" onClick={() => {
								setData(new Array(9).fill(null));
								setWinner(null);
							}}>Reset</button></div>: null)
					}
				</div>
			</div>
		</>
	);
}