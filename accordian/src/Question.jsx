import React, { useContext } from "react";
import { IDContext } from "./Accordian";

function Question({item}){
	const [currId, setCurrId, multiId, multipleId, setMultipleId] = useContext(IDContext);

	function handleSingleSelection(id){
		id === currId ? setCurrId(null) : setCurrId(id); // If clicked currently open one collapse it, otherwise  expand the selected one
	}

	function handleMultiSelection(id){
		const ind = multipleId.indexOf(id);
		if(ind == -1) setMultipleId([...multipleId, id]);
		else setMultipleId(multipleId.filter((i) => i !== id));
	}

	function itemPresent(id){
		return multiId ? (multipleId.indexOf(id) != -1 ? true : false) : (currId === id ? true : false);
	}

	return (
		<>
			<div className="question-item" onClick={multiId ?() => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)}>
				<div className="question" style={{fontWeight: itemPresent(item.id) ? "bold" : "normal"}}>
					{item.question}
				</div>
				<div className = {itemPresent(item.id) ? "answer show" : "answer"}>
					{item.answer}
				</div>
				<span>{itemPresent(item.id) ? "-" : "+"}</span>
			</div>
		</>
	);
}

export default Question;