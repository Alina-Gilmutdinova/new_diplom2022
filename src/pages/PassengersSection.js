import React from 'react';
import '../css/style.css';
/*import '../css/choiceSeats.css';*/
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

import closemin from '../img/passengers/closemin.svg';
import  minus from '../img/passengers/minus.svg';

function PasengersSection() {
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
                  <section className="passenger_container">
      <div className="passenger_main_container">
      <div className="passenger_head_container">
         <div className="passenger_img">
         <img src={closemin} alt="closemin" />
      </div>
         <div className="passenger_quantity">Пассажир 1</div>
         <img src={closemin} alt="closemin" />
      </div>
      <div className="passenger_information_border_top"></div>
      <div className="passenger_information_container">
      <select className="passenger_list_container">
         <option value="1">Взрослый</option>
         <option value="2">Детский</option>
       </select>
      </div>
     <div className="passenger_information_container">
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Фамилия</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="" />
          </div>
      </div>
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Имя</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="" />
          </div>
      </div>
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Отчество</div>
            <input name="text-field__input" type="text"ClassName="data" id="data" placeholder="" />
          </div>
      </div>
     </div>
     <div className="passenger_information_container">
      <div className="passenger_information_body">
         <div className="passenger_text">Пол</div>
         <form action="">
            <input type="radio" id="male" ClassName="gender"/>
            <label for="male" id="male">М</label>
            <input type="radio" id="female" ClassName="gender"/>
            <label for="female" id="female">Ж</label>
            </form>
      </div>
      <div className="passenger_information_body">
      <div className="passenger_information_data">
         <div className="text-field">
            <div className="passenger_text">Дата рождения</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="ДД/ММ/ГГ" />
          </div>
         </div>
      </div>
     </div>
   
     <div className="passenger_information_container">
      <label>ограниченная подвижность
         <input type="checkbox" />
         <span></span>
       </label>
   </div
   </div>
   <div className="passenger_information_border"></div>
   <div className="passenger_information_container">
      <div className="passenger_information_document">
      <div className="passenger_text">Тип документа</div>
      <select className="passenger_list_container">
         <option value="1">Паспорт РФ</option>
         <option value="2">Свидетельство о рождении</option>
       </select>
      </div>
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Серия</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="__ __ __ __" />
          </div>
      </div>
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Номер</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="__ __ __ __ __ __" />
          </div>
      </div>
   </div>
   <div className="passenger_information_border"></div>
   <div className="passenger_information_button">
      <a href="#" className="button">Следующий пассажир</a>
</div>
</div>
</div>
   </section>
   <section className="passenger_container">
      <div className="passenger_main_container">
      <div className="passenger_head_container">
         <div className="passenger_img">
         <img src={minus} alt="minus" />
      </div>
         <div className="passenger_quantity">Пассажир 1</div>
         <img src={closemin} alt="closemin" />
      </div>
      <div className="passenger_information_border_top"></div>
      <div className="passenger_information_container">
      <select className="passenger_list_container">
         <option value="1">Взрослый</option>
         <option value="2">Детский</option>
       </select>
      </div>
     <div className="passenger_information_container">
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Фамилия</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="" />
          </div>
      </div>
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Имя</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="" />
          </div>
      </div>
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Отчество</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="" />
          </div>
      </div>
     </div>
     <div className="passenger_information_container">
      <div className="passenger_information_body">
         <div className="passenger_text">Пол</div>
         <form action="">
            <input type="radio" id="male" name="gender"/>
            <label for="male" id="male">М</label>
            <input type="radio" id="female"name="gender"/>
            <label for="female" id="female">Ж</label>
            </form>
      </div>
      <div className="passenger_information_body">
      <div className="passenger_information_data">
         <div className="text-field">
            <div className="passenger_text">Дата рождения</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="ДД/ММ/ГГ" />
          </div>
         </div>
      </div>
     </div>
   
     <div className="passenger_information_container">
      <label>ограниченная подвижность
         <input type="checkbox" />
         <span></span>
       </label>
   </div>
   <div className="passenger_information_border"></div>
   <div className="passenger_information_container">
      <div className="passenger_information_document">
      <div className="passenger_text">Тип документа</div>
      <select name="passenger_list_container">
         <option value="2">Свидетельство о рождении</option>
       </select>
      </div>
      <div className="passenger_information_type">
         <div className="text-field">
            <div className="passenger_text">Номер</div>
            <input name="text-field__input" type="text" ClassName="data" id="data" placeholder="12 символов __ __ __ __ __ __" />
          </div>
      </div>
   </div>
   <div className="passenger_information_border"></div>
   <div className="passenger_information_button">
      <a href="#" className="button">Следующий пассажир</a>
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

export default PasengersSection;