import React from 'react';
import FormRoute2 from '../components/FormRoute2';
import Logo from './Logo';
import Ribbon3 from './Ribbon3';
import '../css/header1.css';

function Header() {
	return (
		<div className="header1">
			<div className="header__container2">
				<Logo />
			</div>
			<div className="header__content2">
				<div className="header__content-form">
					<FormRoute2 />
				</div>
			</div>
			<Ribbon3 />
		</div>
	)
}

export default Header;