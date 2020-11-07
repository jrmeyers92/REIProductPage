import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className='searchbar'>
			<input
				type='search'
				maxLength='70'
				placeholder='Search for great gear & clothing'
				className='searchbar-input'></input>
			<button className='searchbar-button'>
				<i class='fas fa-search'></i>
			</button>
		</div>
	);
};

export default SearchBar;
