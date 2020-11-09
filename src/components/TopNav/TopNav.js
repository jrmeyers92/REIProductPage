import React from "react";
import "./TopNav.css";

const TopNav = () => {
	return (
		<div className='top-nav'>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item picked'>Shop REI</li>
					<li className='nav__item'>REI Outlet</li>
					<li className='nav__item'>Used Gear</li>
					<li className='nav__item'>REI Adventures</li>
					<li className='nav__item'>Classes & Events</li>
					<li className='nav__item'>Expert Advice</li>
					<li className='nav__item'>Co-Op Journal</li>
					<li className='nav__item'>Conversations</li>
					<li className='nav__item'>Membership</li>
				</ul>
			</nav>
		</div>
	);
};

export default TopNav;
