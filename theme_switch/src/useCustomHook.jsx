import React, { useEffect, useState } from "react";

export default function useCustomHook(key, defaultVal){
	const [value, setValue] = useState(() => {
		let currVal;

		try {
			currVal = (JSON.parse(localStorage.getItem(key)) || String(defaultVal));
		} catch (error) {
			console.log(error.message);
			currVal = defaultVal;
		}
		return currVal;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}