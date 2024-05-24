import React, { useState } from "react";
import QRCode from "react-qr-code";
import './index.css';

export default function QRCodeComp(){
	const [value, setValue] = useState(null);

	function handleGeneration(){
		const txt = document.getElementById("qr-code-text").value;

		if(txt && txt.trim() !== "") setValue(txt);
		document.getElementById("qr-code-text").value = "";
	}

	return (
		<>
			<div className="qr-container">
				QR CODE GENERATOR
				<div className="qr-input">
					<input id = "qr-code-text" type="text" name="qr-code" placeholder="Enter your text" />
					<button onClick={handleGeneration} className="qr-btn">Generate QR Code</button>
				</div>

				<div className="qr-code-display">
					<QRCode 
						id = "qr-code-value"
						value = {value ? value : "DUMMY-DATA"}
						size={200}
						bgColor="white"
					/>
				</div>
			</div>
		</>
	);
}