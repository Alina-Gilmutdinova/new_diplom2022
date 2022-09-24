import React from 'react';
import { Pagination, Keyboard, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/reviews.css';
import katia from '../img/katia.png';
import jenia from '../img/jenia.png';

const data = [
	{
		id: 1,
		username: 'Екатерина Вальнова',
		photo: katia,
		testimonial: '"Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."',
	},
	{
		id: 2,
		username: 'Евгений Стрыкало',
		photo: jenia,
		testimonial: '"СМС-сопровождение до посадки cразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."',
	},
	{
		id: 3,
		username: 'Екатерина Вальнова',
		photo: katia,
		testimonial: '"Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."',
	},
	{
		id: 4,
		username: 'Евгений Стрыкало',
		photo: jenia,
		testimonial: '"СМС-сопровождение до посадки cразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."',
	},
	{
		id: 5,
		username: 'Екатерина Вальнова',
		photo: katia,
		testimonial: '"Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."',
	},
	{
		id: 6,
		username: 'Евгений Стрыкало',
		photo: jenia,
		testimonial: '"СМС-сопровождение до посадки cразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."',
	},

]


function Reviews() {
	return (
		<section className="reviews" id="reviews">
			<div className='reviews__container'>
				<h2 className="reviews__title titleh2">Отзывы</h2>
				<div className="reviews-slider swiper-container">
					<div className="reviews-slider__wrapper swiper-wrapper"></div>
					<Swiper
						// install Swiper modules
						modules={[Pagination, Keyboard, A11y]}
						spaceBetween={37}
						slidesPerView={2}
						pagination={{ clickable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log('slide change')}
					>
						{data.map(user => (
							<SwiperSlide key={user.id} className="slide">
								<div className="slide-content">
									<div className="user-image">
										<img src={user.photo} alt={user.username} className="user-photo" />
									</div>
									<div className='user-content'>
										<h5 className="author">{user.username}</h5>
										<p className="user-testimonial">" <i>{user.testimonial}</i> "</p>
									</div>
								</div>
							</SwiperSlide>
						))}

					</Swiper>
				</div>
			</div>

		</section>
	);
};

export default Reviews;