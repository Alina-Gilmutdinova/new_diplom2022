import React from 'react';
import Logo from './Logo';
import youtube from '../img/social/1.svg';
import insta from '../img/social/2.svg';
import g from '../img/social/3.svg';
import facebook from '../img/social/5.svg';
import telegram from '../img/social/6.svg';
import '../css/footer.css';



function Footer() {
	return (
		<footer className="footer" id="kontact">
			<div className="footer__top">
				<div className="footer__main _container">
					<div className="footer__row">
						<div className="footer__column">
							<div className="footer__label">Свяжитесь с нами</div>
							<div className="footer__contacts contacts-footer">
								<a href="tel:8(800)000 00 00" className="contacts-footer__item contacts-footer__item_phone">8(800)000 00 00</a>
								<a href="mailto:inbox@mail.ru" className="contacts-footer__item contacts-footer__item_email">inbox@mail.ru</a>
								<a href="" className="contacts-footer__item contacts-footer__item_skype">tu.train.tickets</a>
								<a href="" className="contacts-footer__item contacts-footer__item_map">г. Москва <br/> ул. Московская 27-35 555 555</a>
							</div>
						</div>
						<section className="page__subscribe subscribe">
							<div className="subscribe__body">
								<div className="footer__label">Подписка</div>
								<h5 className="subscribe__title__mini">Будьте в курсе событий</h5>
								<form action="#" className="subscribe__form">
									<input autocomplete="off" type="email" required name="form[]" placeholder="e-mail" className="subscribe__input" />
										<button type="submit" className="subscribe__button">Отправить</button>
								</form>
								<div className="subscribe_container">
									<h4 className="subscribe__title">Подписывайтесь на нас</h4>
									<div className="footer__social social">
										<a href="" className="social__item">
											<img src={youtube} alt="social" />
										</a>
										<div className="footer__social social">
											<a href="#0" className="social__item">
												<img src={insta} alt="social" />
											</a>
											<a href="#0" className="social__item">
												<img src={g} alt="social" />
											</a>
											<a href="#0" className="social__item">
												<img src={facebook} alt="social" />
											</a>
											<a href="#0" className="social__item">
												<img src={telegram} alt="social" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="footer_line"></div>
					<div className="footer__container">
						<Logo />
						
						<div className="footer_vector"></div>
						
						<div className="footer_years">2018 WEB</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;