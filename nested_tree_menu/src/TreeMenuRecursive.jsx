import React from "react";
import MenuItem from "./MenuItem";

export default function TreeMenuRecursive({menus}){
	return (
		<>
			<ul className="ul-tree">
				{
					menus && menus.length ? 
					menus.map((item, ind) => <MenuItem item = {item} key = {ind}/>) 
					: null
				}
			</ul>
		</>
	);
}