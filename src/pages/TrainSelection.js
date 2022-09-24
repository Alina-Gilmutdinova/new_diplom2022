import React from 'react';
import '../css/style.css';
import Header1 from '../components/Header1';
import Nav from '../components/Nav';
//import Spoiler from '../components/spoiler';
import Pagination123 from '../components/Pagination123';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import LastTickets from "../components/LastTickets";
import Tickets from "../components/Tickets";

import kupe from '../img/icons/kupe.png';
import plackard from '../img/icons/plackard.png';
import sit from '../img/icons/sit.png';
import lux from '../img/icons/lux.png';
import wifi from '../img/icons/wifi.png';
import express from '../img/icons/express.png';



const items = [
	{
		fromcity: 'Санкт-Петербург',
		tocity: 'Самара',
		fromrailway: 'Курский',
		torailway: 'Московский',
		price: '2 500',
		id: 1,
	},
	{
		fromcity: 'Москва',
		tocity: 'Казань',
		fromrailway: 'Курский',
		torailway: 'Московский',
		price: '3 500',
		id: 2,
	},
	{
		fromcity: 'Казань',
		tocity: 'Нижний Новгород',
		fromrailway: 'Курский',
		torailway: 'Московский',
		price: '3 800',
		id: 3,
	}
];


const items1 = [
	{
		choice_number: '116C',
		fromcity: 'Москва',
		tocity: 'Санкт-Петербург',
		choicecitytransparent: 'Адлер',
		volga: '',
		from: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Курский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.10',
			totime: '09.52',
			timestart: '09.42',
		},
		to: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Курский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.10',
			totime: '09.52',
			timestart: '09.42',
		},
		sit: {
			tip: 'Сидячий',
			cunt: '88',
			price: '1920 ',
			ot: 'от',
		},
		plackard: {
			tip: 'Плацкарт',
			cunt: '52',
			price: '2530 ',
			ot: 'от',
		},
		kupe: {
			tip: 'Купе',
			cunt: '24',
			price: '3820 ',
			ot: 'от',
		},
		lux: {
			tip: 'Люкс',
			cunt: '15',
			price: '4950 ',
			ot: 'от',
		},
		id: 1,
	},
	{
		choice_number: '020У',
		fromcity: 'Москва',
		tocity: 'Санкт-Петербург',
		volga: '"Мегаполис"',
		choicecitytransparent: '',
		from: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Ленинградский вокзал',
			torailway: 'Московский вокзал',
			fromtime: '00.20',
			totime: '08.59',
			timestart: '08.39',
		},
		to: '',
		sit: '',
		plackard: '',
		kupe: {
			tip: 'Купе',
			cunt: '90',
			price: '3950',
			ot: 'от',
		},
		lux: {
			tip: 'Люкс',
			cunt: '31',
			price: '4950',
			ot: 'от',
		},
		id: 2,
	},
	{
		choice_number: '116C',
		fromcity: 'Москва',
		tocity: 'Санкт-Петербург',
		choicecitytransparent: 'Нижний Новгород',
		volga: '"Волга"',
		from: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Ленинградский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.41',
			totime: '09.13',
			timestart: '08.32',
		},
		to: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Ленинградский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.41',
			totime: '09.13',
			timestart: '08.32',
		},
		sit: '',
		plackard: {
			tip: 'Плацкарт',
			cunt: '52',
			price: '2530 ',
			ot: 'от',
		},
		kupe: {
			tip: 'Купе',
			cunt: '24',
			price: '3820 ',
			ot: 'от',
		},
		lux: {
			tip: 'Люкс',
			cunt: '15',
			price: '4950 ',
			ot: 'от',
		},
		id: 3,
	},
	{
		choice_number: '116C',
		fromcity: 'Москва',
		tocity: 'Санкт-Петербург',
		choicecitytransparent: 'Адлер',
		volga: '',
		from: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Курский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.10',
			totime: '09.52',
			timestart: '09.42',
		},
		to: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Курский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.10',
			totime: '09.52',
			timestart: '09.42',
		},
		sit: {
			tip: 'Сидячий',
			cunt: '88',
			price: '1920 ',
			ot: 'от',
		},
		plackard: {
			tip: 'Плацкарт',
			cunt: '52',
			price: '2530 ',
			ot: 'от',
		},
		kupe: {
			tip: 'Купе',
			cunt: '24',
			price: '3820 ',
			ot: 'от',
		},
		lux: {
			tip: 'Люкс',
			cunt: '15',
			price: '4950 ',
			ot: 'от',
		},
		id: 4,
	},
	{
		choice_number: '116C',
		fromcity: 'Москва',
		tocity: 'Санкт-Петербург',
		choicecitytransparent: 'Адлер',
		volga: '',
		from: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Курский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.10',
			totime: '09.52',
			timestart: '09.42',
		},
		to: {
			fromcity: 'Москва',
			tocity: 'Санкт-Петербург',
			fromrailway: 'Курский вокзал',
			torailway: 'Ладожский вокзал',
			fromtime: '00.10',
			totime: '09.52',
			timestart: '09.42',
		},
		sit: {
			tip: 'Сидячий',
			cunt: '88',
			price: '1920 ',
			ot: 'от',
		},
		plackard: {
			tip: 'Плацкарт',
			cunt: '52',
			price: '2530 ',
			ot: 'от',
		},
		kupe: {
			tip: 'Купе',
			cunt: '24',
			price: '3820 ',
			ot: 'от',
		},
		lux: {
			tip: 'Люкс',
			cunt: '15',
			price: '4950 ',
			ot: 'от',
		},
		id: 5,
	},
	
]

function TrainSelection() {
	return (
		<div className="wrapper">
			<div className="home-page">
				<Header1 />
				<Nav />
				<div className="main-wrap">
					<div className='main__container'>
						<aside className="nav-aside">
							<section className='nav-select'>
								<div className='nav-select__date'>
									<label className='nav-select__label' htmlFor name="date">Дата поездки</label>
									<div className='nav-select__grup'>
										<input name="date" type="date" className="nav-select__select" />

									</div>
									<label className='nav-select__label' htmlFor name="date">Дата возвращения</label>
									<div className='nav-select__grup'>
										<input name="date" type="date" className="nav-select__select" />
									</div>
								</div>

								<div className="nav-select__switch-container">
									<div className='nav-select__switch-items'>
										<div className='nav-select__switch-item'>
											<img src={kupe} alt="Иконка" />
											<div className='nav-select__switch-title'>Купе</div>
											<div>
												<input type="checkbox" className="nav-select__switch-input" id="switch_1" />
												<label className="nav-select__switch" htmlFor="switch_1">
													<span name="kupe" className="nav-select__switch-control"></span>
												</label>
											</div>
										</div>

										<div className='nav-select__switch-item'>
											<img src={plackard} alt="Иконка" />
											<div className='nav-select__switch-title'>Плацкарт</div>
											<div>
												<input type="checkbox" className="nav-select__switch-input" id="switch_2" />
												<label className="nav-select__switch" htmlFor="switch_2">
													<span className="nav-select__switch-control"></span>
												</label>
											</div>
										</div>

										<div className='nav-select__switch-item'>
											<img src={sit} alt="Иконка" />
											<div className='nav-select__switch-title'>Сидячий</div>
											<div>
												<input type="checkbox" className="nav-select__switch-input" id="switch_3" />
												<label className="nav-select__switch" htmlFor="switch_3">
													<span className="nav-select__switch-control"></span>
												</label>
											</div>
										</div>

										<div className='nav-select__switch-item'>
											<img src={lux} alt="Иконка" />
											<div className='nav-select__switch-title'>Люкс</div>
											<div>
												<input type="checkbox" className="nav-select__switch-input" id="switch_4" />
												<label className="nav-select__switch" htmlFor="switch_4">
													<span className="nav-select__switch-control"></span>
												</label>
											</div>
										</div>

										<div className='nav-select__switch-item'>
											<img src={wifi} alt="Иконка" />
											<div className='nav-select__switch-title'>Wi-Fi</div>
											<div>
												<input type="checkbox" className="nav-select__switch-input" id="switch_5" />
												<label className="nav-select__switch" htmlFor="switch_5">
													<span className="nav-select__switch-control"></span>
												</label>
											</div>
										</div>

										<div className='nav-select__switch-item'>
											<img src={express} alt="Иконка" />
											<div className='nav-select__switch-title'>Экспресс</div>
											<div>
												<input type="checkbox" className="nav-select__switch-input" id="switch_6" />
												<label className="nav-select__switch" htmlFor="switch_6">
													<span className="nav-select__switch-control"></span>
												</label>
											</div>
										</div>
									</div>

								</div>

								<div id="filter-wrap" className='filter__container'>
									<Filter />
								</div>

								{/* <Spoiler /> */}
							</section>

							<div className='last-ticket'>
								<div className='last-ticket__title'>Последние билеты</div>
								<LastTickets items={items} />
							</div>
						</aside>

						<main className='main'>
							<Tickets items1={items1} />
						</main>
					</div>


				</div>


				<Pagination123 />
				<Footer />
			</div >
		</div >

	);
}

export default TrainSelection;