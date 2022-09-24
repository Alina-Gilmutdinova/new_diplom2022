import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainSelection from "./pages/TrainSelection";
import ChoiceSeats from "./pages/ChoiceSeats";
import Page404 from './components/Page404';


import './css/style.css';



function App() {
	return (
		<Routes>			
			<Route path="/" element={<HomePage />} />
			<Route path="/TrainSelection" element={<TrainSelection />} />
			<Route path="/ChoiceSeats" element={<ChoiceSeats />} />
			<Route path='*' element={<Page404 />} />
		</Routes>



	)
}

export default App;
