import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import cashed from '../img/ic_cached_white_48dp.png';
import '../css/formRoute.css';

function FormRoute() {
	return (
		<form className="form-router" action="#" method="get">
			<label htmlFor name="route">Направление</label>
			<div className='select-grup'>
				<select name="route" className="select-router router-svg">
					<option value="placeholder" className="placehold" disabled selected hidden>Откуда</option>
					<option value="moscow">Москва</option>
					<option value="angarsk">Ангарск</option>
					<option value="arhangelsk">Архангельск</option>
					<option value="astrahan">Астрахань</option>
					<option value="barnaul">Барнаул</option>
					<option value="belgorod">Белгород</option>
					<option value="blagoveshchensk">Благовещенск</option>
					<option value="bratsk">Братск</option>
					<option value="briansk">Брянск</option>
					<option value="vielikijnovgorod">Великий Новгород</option>
				</select>

				<div className="cashed">
					<img src={cashed} className="logo"></img>
				</div>

				<select name="route" className="select-router">
				<option value="placeholder" className="placehold" disabled selected hidden>Куда</option>
					<option value="moscow">Москва</option>
					<option value="angarsk">Ангарск</option>
					<option value="arhangelsk">Архангельск</option>
					<option value="astrahan">Астрахань</option>
					<option value="barnaul">Барнаул</option>
					<option value="belgorod">Белгород</option>
					<option value="blagoveshchensk">Благовещенск</option>
					<option value="bratsk">Братск</option>
					<option value="briansk">Брянск</option>
					<option value="vielikijnovgorod">Великий Новгород</option>
				</select>
			</div>

			<label htmlFor name="date">Дата</label>
			<div className='select-grup'>
				<input name="date" type="date" className="select-router" />
				<input name="date" type="date" className="select-router" />
			</div>

			<div className='button'>				
				<Link to="/TrainSelection" className='button-router'>Найти билеты</Link>				
			</div>
		</form>
	)
}

export default FormRoute;