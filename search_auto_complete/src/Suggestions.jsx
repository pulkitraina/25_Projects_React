import React, { useContext } from "react";
import { userContext } from "./SearchAutoComp";

export default function Suggestions({ data, input }) {
	const [setShowDropDown, setFilteredUsers] = useContext(userContext);

	function handleSuggestionClick(item){
		input.value = item;
		// setShowDropDown(false);
		setFilteredUsers([item]);
	}

  return (
    <>
      <ul className="suggestion-list">
				{data && data.length
					? data.map((item, ind) => (
							<li
								key={ind}
								className="suggestion-li"
								onClick={() => handleSuggestionClick(item)}
							>
								{item}
							</li>
						))
					: null}
			</ul>
    </>
  );
}
