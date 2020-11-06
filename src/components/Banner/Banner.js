import React from "react";
import REILogo from "../REILogo/REILogo";
import SearchBar from "../SearchBar/SearchBar";
import "../Banner/Banner.css";

const Banner = () => {
	return (
		<div className='banner'>
			<REILogo />
			<SearchBar />
		</div>
	);
};

export default Banner;
