import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from '../logo.png';
import '../css/logo.css';

function Logo() {
	return (
		<Link to="/" className="header__logo">
			<img src={logo} className="logo"></img>
		</Link>
	)
}

export default Logo;