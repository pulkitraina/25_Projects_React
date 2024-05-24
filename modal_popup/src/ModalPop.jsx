import React, { useState } from "react";
import './index.css';
import Modal from "./Modal";

export default function ModalPop(){
  const [showModal, setShowModal] = useState(false);

	function togglePop(){
		setShowModal(!showModal);
	}

	return (
		<>
			MODAL POPUP
			<div className="largest-modal">
				<button className="modal-btn turn-on-btn" onClick={togglePop}>Show Modal!</button>
				{showModal ? <Modal togglePop = {togglePop} /> : null}
			</div>
		</>
	);
}