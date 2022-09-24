import React from 'react';
import Logo from './Logo';
import FormRoute from '../components/FormRoute';
import '../css/header.css';

function Header() {
	return (<>
		<div className="header">
			<div className="header__container">
				<Logo />
				<div className="header__content">
					<div className="header__content-title">Вся жизнь - <span>путешествие</span></div>
					<div className="header__content-form">
						<FormRoute />
					</div>
				</div>
			</div>			
		</div>
		<div className='header-line'></div>
		</>
	)
}

export default Header;