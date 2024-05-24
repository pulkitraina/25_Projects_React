import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './index.css';

export default function StarRating(){
	const noOfStars = 10;
  const [selected, setSelected] = useState(0); // Initially none selected
  const [hover, setHover] = useState(0); // Initially nothing is on hover

  function handleClick(i){
    setSelected(i + 1);
    setHover(0);
  }

  function handleMouseMove(i){
    setHover(i+1);
  }

  function handleMouseLeave(i){
    setHover(0);
  }

  return (
    <>
      STAR RATING
      <div className="star-container">
        {
          [...Array(noOfStars)].map((_, ind) => {
            return <FaStar 
                    key = {ind} 
                    onClick = {() => handleClick(ind)} 
                    onMouseMove = {() => handleMouseMove(ind)} 
                    onMouseLeave = {() => handleMouseLeave(ind)} 
                    size = {40}
                    color= {(ind < Math.max(hover, selected)) ? "yellow" : "black"}
                    />
          })
        }
      </div>
    </>
  );
}