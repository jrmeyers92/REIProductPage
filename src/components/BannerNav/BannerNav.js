import React from "react";
import "./BannerNav.css";

const BannerNav = () => {
	return (
		<div className='bannernav'>
			<ul className='bannernav__list'>
				<li className='bannernav-item'>Gifts</li>
				<li className='bannernav-item'>Camp & Hike</li>
				<li className='bannernav-item'>Climb</li>
				<li className='bannernav-item'>Cycle</li>
				<li className='bannernav-item'>Paddle</li>
				<li className='bannernav-item'>Run</li>
				<li className='bannernav-item'>Fitness</li>
				<li className='bannernav-item'>Snow</li>
				<li className='bannernav-item'>Travel</li>
				<li className='bannernav-item'>Men</li>
				<li className='bannernav-item'>Women</li>
				<li className='bannernav-item'>Kids</li>
				<li className='bannernav-item'>Deals</li>
				<li className='bannernav-item'>More</li>
				<li className='bannernav-item outlet'>
					REI OUTLET <i class='fas fa-angle-right'></i>
				</li>
			</ul>
		</div>
	);
};

export default BannerNav;
