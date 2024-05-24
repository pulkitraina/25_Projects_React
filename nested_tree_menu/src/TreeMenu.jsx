import React from "react";
import './index.css'
import TreeMenuRecursive from "./TreeMenuRecursive";

export default function TreeMenu({menus}){
	return (
		<>
			Tree Menu
			<div className="menu-container">
				<TreeMenuRecursive menus = {menus} />
			</div>
		</>
	);
}