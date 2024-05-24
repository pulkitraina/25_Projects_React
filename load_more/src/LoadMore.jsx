import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from '../../image_slider/src/Loading';
import './index.css'

export default function LoadMore({url}){
	const [skip, setSkip] = useState(0);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const itemsPerPage = 10;

	async function fetchData(url){
		try{
			setLoading(true);
			const res = await fetch(`${url}?limit=${itemsPerPage}&skip=${itemsPerPage*skip}`);
			const data = await res.json();

			if(data && data.products && data.products.length) setProducts([...products, ...data.products]);

			setLoading(false);
		}
		catch(e){
			setError(e.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData(url);
	}, [skip])

	function handleClick(){
		if(skip < 4) setSkip(skip+1);
		else{
			alert("No more products to load!");
		}
	}

	if(loading){
		return (
		  <Loading />
		);
	  }
		else if(error){
			return (
				<>
					<div className="error">
						ERROR: {error}
					</div>
				</>
			);
		}
		else{
			return (
				<>
					LOAD MORE COMPONENT
					<div className="large-container load-more">
						{
							products.map((_ , ind) => (
								<ProductCard data = {products[ind]} key={ind} />
							))
						}
					</div>
					<button disabled = {skip < 4 ? false: true} onClick={handleClick} className="load-more-btn">Load More</button>
				</>
			);
		}
}