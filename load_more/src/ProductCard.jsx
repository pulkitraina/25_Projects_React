import React from "react";
import StarMaker from "./StarMaker";

export default function ProductCard({data}){
	const {id, title, description, price, rating, thumbnail} = data;

	return (
		<>
			<div className="product-card" key={id}>
				<img src={thumbnail} />
				<div className="title">{title}</div>
				<div className="desc">{description}</div>
				<div className="price-rating">
					<div className="price">Rs.{price}</div>
					<div className="stars"><StarMaker rating = {rating} /></div>
				</div>
			</div>
		</>
	);
}