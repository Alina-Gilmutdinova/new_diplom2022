import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import cashed from '../img/ic_cached_white_48dp.png';
import '../css/formRoute2.css';

function FormRoute2() {
	return (
		<>
			<form className="form-router2" action="#" method="get">
				<div className="form-router2__container">
					<label htmlFor name="route">Направление</label>
					<div className='select-grup'>
						<select name="route" className="select-router router-svg">
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
				</div>

				<div className="form-data__container">
					<label htmlFor name="date">Дата</label>
					<div className='select-grup'>
						<input name="date" type="date" className="select-router select-input1" />
						<input name="date" type="date" className="select-router" />
					</div>
				</div>
			</form>
			<div className='button2'>
				<Link to="/TrainSelection" className='button-router2'>Найти билеты</Link>
			</div>
		</>
	)
}

export default FormRoute2;