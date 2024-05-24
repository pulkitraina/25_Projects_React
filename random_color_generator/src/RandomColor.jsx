import React, { useState } from "react";
import './index.css';
import Button from "./Button";

export default function RandomColor(){
	const [rgb, setRGB] = useState(false);
  const [currCol, setCurrCol] = useState('#000000');

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  return (  
    <>
      <div className='large-container color' style={{backgroundColor: currCol}}>
        <div className='buttons'>
          <Button id = "1" text = "Create RGB" setRGB = {setRGB}/>
          <Button id = "2" text = "Create HEX" setRGB = {setRGB}/>
          <Button id = "3" text = "Gen Random Color" setRGB = {setRGB} setCurrCol = {setCurrCol}/>
        </div>

        <div className="color-display-container">
          <div className='color-display'>
            <span>{rgb ? "RGB " : "HEX "}COLOR:</span>
            <span className='color'>{!rgb ? currCol : (() => {
              const a = hexToRgb(currCol);
              return `(${a.r}, ${a.g}, ${a.b})`
            })()}</span>
          </div>
        </div>
      </div>
    </>
  );
}