import React from "react";
import "./BannerActions.css";

const BannerActions = () => {
	return (
		<div className='banneractions'>
			<span className='banneractions-item'>
				Sign in <i class='fas fa-user'></i>
			</span>
			<span className='banneractions-item'>
				Stores <i class='fas fa-map-marker-alt'></i>
			</span>
			<span className='banneractions-item'>
				Cart <i class='fas fa-shopping-cart'></i>
			</span>
		</div>
	);
};

export default BannerActions;
