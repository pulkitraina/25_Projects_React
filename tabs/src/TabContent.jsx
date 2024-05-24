import React, { useState } from "react";
import tabCont from "./data";
import './index.css';

export default function TabContent(){
	const [currTab, setCurrTab] = useState(0);

	return (
		<>
			TABS CONTENT
			<div className="tabs-container">
				<div className="tabs-heading">
					{
						tabCont.map((item, ind) => {
							return <div key={ind} className="tab-heading" onClick={() => setCurrTab(ind)} style={{backgroundColor: ind === currTab ? "black" : ""}}>
								<span>{item.label}</span>
							</div>
						})
					}
				</div>
				<div className="tab-content">
					{tabCont[currTab].content}
				</div>
			</div>
		</>
	);
}