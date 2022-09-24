import React from 'react';
import '../css/about.css';

function About() {
	return (
		<section className='about' id="about">
			<div className='about-container'>
				<h2 className='about__title titleh2'>О нас</h2>
				<div className='about__text'>
					<p>Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
					<p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
					<p><span>Покупать жд билеты дешево можно за 90 суток до отправления поезда. <br />Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</span></p>
				</div>
			</div>


		</section>
	)
}

export default About;