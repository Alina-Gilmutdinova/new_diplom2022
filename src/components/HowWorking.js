import React from 'react';
import tv from '../img/tv.png';
import home from '../img/home.png';
import earth from '../img/earth.png';
import '../css/howWorking.css';


function HowWorking() {
	return (
		<section className='how-working' id="howWorking">
			<div className='how-working__container'>
				<h2 className='how-working__title titleh2'>Как это работает</h2>
				<button className='how-working__button'>Узнать больше</button>
				<div className='how-working__content'>
					<div className='how-working__card'>
						<div className='how-working__card-img'>
							<img src={tv}></img>
						</div>
						<div className='how-working__card-text'>Удобный заказ <br /> на сайте</div>
					</div>
					<div className='how-working__card'>
						<div className='how-working__card-img'>
							<img src={home}></img>
						</div>
						<div className='how-working__card-text'>Нет необходимости <br /> ехать в офис</div>
					</div>
					<div className='how-working__card'>
						<div className='how-working__card-img'>
							<img src={earth}></img>
						</div>
						<div className='how-working__card-text'>Огромный выбор <br />направлений</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowWorking;