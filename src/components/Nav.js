import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/nav.css';

function Nav() {
	return (
		<nav className="header__nav-container"id="navbar">
			<div className="header__nav">
				<Link to="about" spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="header__nav-link">О нас</Link>
				<Link to="howWorking" spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="header__nav-link">Как это работает</Link>
				<Link to="reviews" spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="header__nav-link">Отзывы</Link>
				<Link to="kontact" spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="header__nav-link">Контакты</Link>
				
				
				
			</div>
		</nav>
	)
}

export default Nav;