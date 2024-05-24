import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarMaker({rating}){
	const maxStars = 5;

	function rater(rating, ind){
		if(rating > ind) return 100;
		
		ind -= rating;
		return (ind*100);
	}

	return (
		<>
			{[...Array(maxStars)].map((_, ind) => (
				<FaStar key = {ind} clipPath={`polygon(0 0, ${rater(rating, ind+1)}% 0, ${rater(rating, ind+1)}% 100%, 0% 100%)`} color='gold'/>
			))}
		</>
	);
}