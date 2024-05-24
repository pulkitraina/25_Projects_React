import React, { useEffect, useState } from "react";
import Loading from "../../image_slider/src/Loading";
import '../../image_slider/src/index.css';
import $ from 'jquery';
import './index.css';

export default function ScrollIndicator({url}){

	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	const [data, setData] = useState([]);
	const [scrollPerc, setScrollPerc] = useState(0);
	
	async function fetchData(url){
		setLoading(true);
		try {
			const res = await fetch(url);
			const data = await res.json();

			if(data && data.products && data.products.length) setData(data.products);
			else setErrorMsg("No Prodcuts Found");

			setLoading(false);
		} catch (error) {
			setErrorMsg(error.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData(`${url}?limit=${100}&skip=${0}`);
	}, [url]);

	function scale (number, inMin, inMax, outMin, outMax) {
		return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
	}

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			const num = $(window).scrollTop() + $(window).height();
			const den = $(document).height();
			const ans = scale((num/den)*100, 14, 99.999, 0, 100);
			setScrollPerc(ans);
		})

		return () => window.removeEventListener("scroll", () => {});
	}, []);

	if(loading){
		return <Loading />
	}
	else if(errorMsg){
		return (
			<>
				<div className="error">
					ERROR: {errorMsg}
				</div>
			</>
		);
	}
	else{
		return (
			<>
				<div className="scroll-sticky">
					<h1 className="scroll-h1">Custom Scroll Indicator</h1>
					<div className="progress-indicator" style={{backgroundColor: "gold", width: `${scrollPerc}%`}}></div>
				</div>
				<div className="data-items-container">
					{
						data && data.length ? 
						data.map((item, ind) => <p key={ind}>{item.title}</p>)
						: null
					}
				</div>
		</>
		);
	}
}