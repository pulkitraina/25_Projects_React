import React from "react";

function Button({ id, text, setRGB, setCurrCol }) {
  function setHex() {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
		
		let str = "#";
		for(var i = 0; i<6; i++) str += hex[Math.floor(Math.random()*hex.length)];
		setCurrCol(str);
  }

  return (
    <button
      onClick={id === "1" ? () => setRGB(true) : id === "2" ? () => setRGB(false) : setHex}
      className="color-btn"
    >
      {text}
    </button>
  );
}

export default Button;
