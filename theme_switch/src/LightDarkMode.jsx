import React, { useState } from "react";
import './index.css';
import useCustomHook from "./useCustomHook";

export default function LightDarkMode(){
	// const [theme, setTheme] = useState("light"); // This can be done too but we'll use custom hook

	const [theme, setTheme] = useCustomHook("theme", "light");

	function handleSwitch(){
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<>
			<div className="light-dark-container" data-theme = {theme}>
				<span className="light-dark-span">LIGHT DARK</span>
				<p>Hello, World!</p>
				<button className="theme-btn" onClick={handleSwitch}>Change Theme</button>
			</div>
		</>
	);
}