import React from "react";
import REILogo from "../REILogo/REILogo";
import SearchBar from "../SearchBar/SearchBar";
import "../Banner/Banner.css";
import BannerNav from "../BannerNav/BannerNav";
import BannerActions from "../BannerActions/BannerActions";

const Banner = () => {
	return (
		<div className='banner'>
			<REILogo />
			<div className='banner-vert'>
				<div className='banner-horz'>
					<SearchBar />
					<BannerActions />
				</div>
				<BannerNav />
			</div>
		</div>
	);
};

export default Banner;
