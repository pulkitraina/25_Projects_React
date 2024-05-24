import React, { createContext, useEffect, useState } from 'react';
import './index.css';
import Suggestions from './Suggestions';
import Loading from '../../image_slider/src/Loading';

export const userContext = createContext();

export default function SearchAutoComp({url}){
	const [loading, setLoading] = useState(false);
	const [errMsg, setErrMsg] = useState(null);
	const [users, setUsers] = useState([]);

	const [showDropDown, setShowDropDown] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	function handleChange(e){
		const q = e.target.value.toLowerCase();
		setSearchParam(q);

		if(q.length >= 1){
			const filteredData = users && users.length ? 
			users.filter((item) => item.indexOf(q) > -1)
			: [];

			setFilteredUsers(filteredData);
			setShowDropDown(true);
		}
		else setShowDropDown(false);
	}

	async function fetchUserList(){
		setLoading(true);
		try {
			const res = await fetch(url+ "?limit=100");
			const data = await res.json();
			if(data && data.users && data.users.length) setUsers((prevUsers) => (data.users.map(item => (item.firstName + " " + item.lastName).toLowerCase())));
			else setErrMsg("No users found");
						
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setErrMsg(error.message);
		}
	}

	useEffect(() => {
		fetchUserList();
	}, [url]);

	// console.log(users, filteredUsers);

	if(loading){
		return <Loading />
	}
	else if(errMsg){
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
				AUTO COMPLETE USERS
				<div className='largest-modal'>
					<input onChange = {handleChange} placeholder='Search users...' name='search-users' className='user-search'/>
					{
						showDropDown && <userContext.Provider value={[setShowDropDown, setFilteredUsers]}><Suggestions data={filteredUsers} input = {document.getElementsByName("search-users")[0]}/></userContext.Provider>
					}
				</div>
			</>
		);
	}
}
