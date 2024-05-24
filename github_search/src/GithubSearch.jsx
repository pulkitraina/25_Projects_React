import React, { useState } from "react";
import './index.css';
import Loading from '../../image_slider/src/Loading'

export default function GithubSearch(){

	const month = {
		1: "January",
		2: "February",
		3: "March",
		4: "April",
		5: "May",
		6: "June",
		7: "July",
		8: "August",
		9: "September",
		10: "October",
		11: "November",
		12: "December"
	};

	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [errMsg, setErrMsg] = useState(null);

	async function fetchData(username){
		setLoading(true);
		try {
			const res = await fetch("https://api.github.com/users/" + username);
			const data = await res.json();
			setData(data);
			console.log(data);
			setLoading(false);
		}
		catch(e){
			setErrMsg(e.message);
			setLoading(false);
		}
	}

	function searchData(){
		const txt = document.getElementById("github-search-text").value;

		if(txt && txt.trim() !== ""){
			fetchData(txt);
		}

		document.getElementById("github-search-text").value = "";
	}

	if(loading){
		return <Loading />
	}
	else if(errMsg){
		return (
			<>
				<div className="error">
					ERROR: {errMsg}
				</div>
			</>
		);
	}
	else{
		return (
			<>
				GITHUB SEARCH
				<div className="largest-modal" >
					<div className="github-form-container">
						<div className="github-search-field">
							<input id = "github-search-text" placeholder="Enter Profile"/>
							<button className="github-btn" onClick={searchData}>Search</button>
						</div>
						<div className="github-profile-container">
							<div className="github-profile-pic" style={{background: `url(${data.avatar_url}) no-repeat center/cover`}} />
							<a className="github-user-name" href={data.html_url || "#"}>{data.name || data.login || "Jane Doe"}</a>
							<span className="github-joining-date">Joined on {(data.created_at && `${data.created_at.substring(8, 10)} ${month[parseInt(data.created_at.substring(5, 7))]} ${data.created_at.substring(0, 4)}`) || ("1 January 2000")} </span>
							<span>Public Repos: {data.public_repos || 0}</span>
							<span>Followers: {data.followers || 0}</span>
							<span>Following: {data.following || 0}</span>
						</div>
					</div>
				</div>
			</>
		);
	}
}