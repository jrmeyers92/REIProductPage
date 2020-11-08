import React from "react";
import REILogo from "../REILogo/REILogo";
import SearchBar from "../SearchBar/SearchBar";
import "../Banner/Banner.css";
import BannerNav from "../BannerNav/BannerNav";

const Banner = () => {
	return (
		<div className='banner'>
			<REILogo />
			<div className='banner-horz'>
				<SearchBar />
			</div>
			<BannerNav />
		</div>
	);
};

export default Banner;
