import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div>
			<input
				type='search'
				maxLength='70'
				placeholder='search for great gear & clothing'
				className='searchbar-input'></input>
		</div>
	);
};

export default SearchBar;
