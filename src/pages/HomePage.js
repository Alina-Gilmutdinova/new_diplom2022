import React from 'react';
import '../css/style.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import HowWorking from '../components/HowWorking';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';


function HomePage() {
	return (
		<div className="home-page">
			<Header />
			<Nav />
			<About />
			<HowWorking />
			<Reviews />
			<Footer />
		</div >
	);
}

export default HomePage;