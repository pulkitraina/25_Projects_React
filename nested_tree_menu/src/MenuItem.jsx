import React, { useState } from "react";
import {FaPlus, FaMinus} from 'react-icons/fa';
import TreeMenuRecursive from "./TreeMenuRecursive";

export default function MenuItem({item}){
	
	const [isOpen, setIsOpen] = useState({});

	function handleToggle(label){
		setIsOpen({...isOpen, [label]: (isOpen[label]==null ? true: !(isOpen[label]))});
	}

	return (
		<>
			<li>
				<div className="menu-item">
					{item.label} 
					{
						item && item.children && item.children.length ? 
						<span className = "plus-minus" onClick={() => handleToggle(item.label)}>{isOpen[item.label] ? <FaMinus color="white" size={25}/> : <FaPlus color="white" size={25}/>}</span> 
						: ""
					}
				</div>
				{
					item && item.children && item.children.length && isOpen[item.label] ? 
					<TreeMenuRecursive menus = {item.children} />
					: null
				}
			</li>
		</>
	);
}