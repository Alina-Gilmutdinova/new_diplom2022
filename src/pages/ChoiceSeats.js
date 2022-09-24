import React from 'react';
import '../css/style.css';
import '../css/choiceSeats.css';
import Header1 from '../components/Header1';
import Nav from '../components/Nav';
//import Spoiler from '../components/spoiler';
import Pagination123 from '../components/Pagination123';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import LastTickets from "../components/LastTickets";

import kupe from '../img/icons/kupe.png';
import plackard from '../img/icons/plackard.png';
import sit from '../img/icons/sit.png';
import lux from '../img/icons/lux.png';
import wifi from '../img/icons/wifi.png';
import express from '../img/icons/express.png';

import arrowto from '../img/arrowto.svg';
import train from '../img/train.svg';
import one from '../img/1.svg';
import two from '../img/2.svg';
import time from '../img/time.svg';
import seat from '../img/Siti.png';
import union from '../img/Union.svg';
import kupe1 from '../img/kupe.svg';
import lux1 from '../img/lux.svg';
import arrowback from '../img/arrowback.svg';

import numb1 from '../img/services/1.svg';
import numb2 from '../img/services/2.svg';
import numb3 from '../img/services/3.svg';
import numb4 from '../img/services/4.svg';

import van1 from '../img/services/van1.png';



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


function ChoiceSeats() {
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
							<h2 className='about__title titleh2'>Выбор мест</h2>
							<section className="van_section">
								<div className="van_container">
									<div className="select_train_one">
										<button className="arrow_back">
											<img src={arrowto} alt="train" />
										</button>
										<div className="select_button">
											<a className="button4" href="">Выбрать другой поезд</a>
										</div>
									</div>
									<div className="select_train_content">
										<div className="select_train_container">
											<a href="" className="train__item">
												<img src={train} alt="train" />
											</a>
											<div className="select_train_number">
												<div className="select_number">116С</div>
												<div className="select_menu_icon">
													<div className="select_city_transparent">Адлер</div>
													<img src={one} alt="icon_arrow" />
												</div>
												<div className="select_menu_icon">
													<div className="select_city">Москва</div>
													<img src={two} alt="icon_arrow" />
												</div>
												<div className="select_city">Санкт-Петербург</div>
											</div>
											<div className="select_train_number">
												<div className="select_time">00:10</div>
												<div className="select_city">Москва</div>
												<div className="seleсt_railway_station_transparent">Курский вокзал</div>
											</div>

											<div className="select_train_number sel-pad">
												<div className="select_time">09:52</div>
												<div className="select_city">Санкт-Петербург</div>
												<div className="seleсt_railway_station_transparent">Ладожский вокзал</div>
											</div>

											<div className="select_duration">
												<div className="select_icon_time">
													<img src={time} alt="icon_time" />
												</div>
												<div className="duration_time">9 часов<br /> 42 минуты</div>
											</div>
										</div>
									</div>

									<div className="number_of_tickets">Количество билетов</div>
									<div className="select_type_container">
										<div className="select_type_adult_up">
											<div className="select_button_type">
												<a className="button5" href="">Взрослых — 2</a>
											</div>
											<div className="select_type_text_container">
												<div className="select_type_text">Можно добавить еще <br />3 пассажиров</div>
											</div>
										</div>
										<div className="select_type_child">
											<div className="select_button_type">
												<a className="button5 but5" href="">Детских — 1</a>
											</div>
											<div className="select_type_text_container">
												<div className="select_type_text_up">Можно добавить еще 3 детей <br /> до 10 лет.Свое место в вагоне,
													<br />как у взрослых, но дешевле <br />в среднем на 50-65%
												</div>


											</div>
										</div>
										<div className="select_type_child_not">
											<div className="select_button_type">
												<a className="button6" href="">Детских «без места» — 0</a>
											</div>
										</div>
									</div>

									<div className="line"></div>
									<div className="select_footer">
										<div className="number_of_tickets">Тип вагона</div>
										<div className="select_footer_container">
											<div className="select_footer_group">
												<img src={seat} alt="icon_footer" />
												<div className="place">Сидячий</div>
											</div>
											<div className="select_footer_group">
												<img src={union} alt="icon_footer" />
												<div className="place">Плацкарт</div>
											</div>
											<div className="select_footer_group">
												<img src={kupe1} alt="icon_footer" />
												<div className="place_kupe">Купе</div>
											</div>
											<div className="select_footer_group">
												<img src={lux1} alt="icon_footer" />
												<div className="place">Люкс</div>
											</div>
										</div>
									</div>

									<div className="information_section_container">
										<div className="information_section">
											<div className="information_section_text">Вагоны <a href="" className="information_section_quantity">07</a>
												<a href="" className="information_section_quantity_2">09</a>
											</div>
										</div>
										<div className="information_section">
											<div className="information_section_text">Нумерация вагонов начинается с головы поезда</div>
										</div>
									</div>
									<div className="information_section_van">
										<div className="information_section_van_num">
											<div className="information_section_num">07</div>
											<div className="information_section_van_text">вагон</div>
										</div>
										<div className="information_section_blank blank">
											<div className="information_text_inside">Места <a href="" class="information_section_quantity3">11</a></div>
											<div className="information_section_choice_seat">
												<div className="information_section_seat">Верхние</div>
												<div className="information_section_seat_quantity4">3</div>
											</div>
											<div className="information_section_choice_seat">
												<div className="information_section_seat">Нижние</div>
												<div className="information_section_seat_quantity4">8</div>
											</div>
										</div>
										<div className="information_section_blank blank blank3">
											<div className="information_text_inside">Стоимость</div>
											<span className="information_section_price">2 920 &#8399;</span>
											<span className="information_section_price">3 530 &#8399;</span>
										</div>
										<div className="information_section_blank blank blank4">
											<div className="information_text_inside">Обслуживание <a href="" class="information_section_serv1">ФПК</a></div>
											<div className="information_services_icon">
												<img src={numb1} alt="icon_services" />
												<img src={numb2} alt="icon_services" />
												<img src={numb3} alt="icon_services" />
												<img src={numb4} alt="icon_services" />
											</div>
										</div>
									</div>
									<div className="information_tooltip">
										<span className="information_tooltip_text"> 11 человек выбирают <br />места в этом поезде</span>
									</div>
									<div className="information_section_img">
										<img src={van1} alt="icon_van" />
									</div>
								</div>
							</section>

							<section className="van_section van_section2">
								<div className="van_container">
									<div className="select_train">
										<button className="arrow_back">
											<img src={arrowback} alt="train" />
										</button>
										<div className="select_button">
											<a className="button4" href="">Выбрать другой поезд</a>
										</div>
									</div>
									<div className="select_train_content">
										<div className="select_train_container">
											<a href="" className="train__item">
												<img src={train} alt="train" />
											</a>
											<div className="select_train_number">
												<div className="select_number">116С</div>
												<div className="select_menu_icon">
													<div className="select_city_transparent">Адлер</div>
													<img src={one} alt="icon_arrow" />
												</div>
												<div className="select_menu_icon">
													<div className="select_city">Москва</div>
													<img src={two} alt="icon_arrow" />
												</div>
												<div className="select_city">Санкт-Петербург</div>
											</div>
											<div className="select_train_number">
												<div className="select_time">00:10</div>
												<div className="select_city">Москва</div>
												<div className="seleсt_railway_station_transparent">Курский вокзал</div>
											</div>

											<div className="select_train_number sel-pad sel2-pad">
												<div className="select_time">09:52</div>
												<div className="select_city">Санкт-Петербург</div>
												<div className="seleсt_railway_station_transparent">Ладожский вокзал</div>
											</div>

											<div className="select_duration">
												<div className="select_icon_time">
													<img src={time} alt="icon_time" />
												</div>
												<div className="duration_time">9 часов<br /> 42 минуты</div>
											</div>
										</div>
									</div>

									<div className="number_of_tickets">Количество билетов</div>
									<div className="select_type_container">
										<div className="select_type_adult_up">
											<div className="select_button_type">
												<a className="button5" href="">Взрослых — 2</a>
											</div>
											<div className="select_type_text_container">
												<div className="select_type_text">Можно добавить еще <br />3 пассажиров</div>
											</div>
										</div>
										<div className="select_type_child">
											<div className="select_button_type">
												<a className="button5 but5" href="">Детских — 0</a>
											</div>
											<div className="select_type_text_container">
												<div className="select_type_text_up"></div>


											</div>
										</div>
										<div className="select_type_child_not">
											<div className="select_button_type">
												<a className="button6" href="">Детских «без места» — 0</a>
											</div>
										</div>
									</div>

									<div className="line"></div>

									<div className="select_footer">
										<div className="number_of_tickets">Тип вагона</div>
										<div className="select_footer_container footer_container2">
											<div className="select_footer_group">
												<img src={seat} alt="icon_footer" />
												<div className="place">Сидячий</div>
											</div>
											<div className="select_footer_group">
												<img src={union} alt="icon_footer" />
												<div className="place">Плацкарт</div>
											</div>
											<div className="select_footer_group svg-gray">
												<img src={kupe1} alt="icon_footer" />
												<div className="place_kupe">Купе</div>
											</div>
											<div className="select_footer_group">
												<img src={lux1} alt="icon_footer" />
												<div className="place">Люкс</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</main>
					</div>


				</div>


				<Pagination123 />
				<Footer />
			</div >
		</div >

	);
}

export default ChoiceSeats;