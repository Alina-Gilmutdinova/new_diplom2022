import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../css/cardtickets.css';
import trainimg from '../img/Group 9.svg';
import arrow from '../img/Arrow.svg';
import arrow1 from '../img/Arrow (1).svg';
import servis from '../img/services.svg';

function CardTickets({ item1 }) {
	


	return (
		<section className="page_choice choice">
			<div className="choice_top">
				<div className="choice_container">
					<div className="choice_column_a_train_container">
						<div className="choice_column_a_train">
							<div className="choice_icon">
								<img src={trainimg} alt="itemtrain" />
							</div>
							<div className="choice_number">{item1.choice_number}</div>
							<div className="choice_number"></div>
							<div className="choice_menu menu_choice">
								<div className="choice_menu_icon">
									<div className="choice_city_transparent">{item1.choicecitytransparent}</div>
									<img src={arrow} alt="icon_arrow" />
								</div>
								<div className="choice_menu_icon">
									<div className="choice_city">{item1.fromcity}</div>
									<img src={arrow1} alt="icon_arrow" />
								</div>
								<div className="choice_city">{item1.tocity}</div>
								<div className="choice_city">{item1.volga}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="choice_main_container">
				<div className="choice_time_container">
					<div className="choice_time">
						<div className="choice_time-start">{item1.from.fromtime}</div>
						<div className="choice_city">{item1.from.fromcity}</div>
						<div className="choice_city_transparent">{item1.from.fromrailway}</div>
					</div>
					<div className="choice_travel_start">
						<div className="travel_time time">{item1.from.timestart}</div>

					</div>
					<div className="choice_time choice_time2">
						<div className="choice_time-start">{item1.from.totime}</div>
						<div className="choice_city">{item1.from.tocity}</div>
						<div className="choice_city_transparent">{item1.from.torailway}</div>
					</div>
				</div>
				<div className="choice_time_container_footer">
					<div className="choice_time">
						<div className="choice_time-start">{item1.to.fromtime}</div>
						<div className="choice_city">{item1.to.fromcity}</div>
						<div className="choice_city_transparent">{item1.to.fromrailway}</div>
					</div>
					<div className="choice_travel_start">
						<div className="travel_time time2">{item1.to.timestart}</div>

					</div>
					<div className="choice_time choice_time2">
						<div className="choice_time-start">{item1.to.totime}</div>
						<div className="choice_city">{item1.to.tocity}</div>
						<div className="choice_city_transparent">{item1.to.torailway}</div>
					</div>
				</div>
			</div>

			<div className="choice_price_wrap">
				<div className="choice_price_container">
					<div className="choice_price_group">
						<div className="choice_seat seat">{item1.sit.tip}</div>
						<div className="choice_seat seat">{item1.plackard.tip}</div>
						<div className="choice_seat seat">{item1.kupe.tip}</div>
						<div className="choice_seat seat">{item1.lux.tip}</div>
					</div>
					<div className="choice_price_group">
						<div className="choice_seat_quantity seat">{item1.sit.cunt}</div>
						<div className="choice_seat_quantity seat">{item1.plackard.cunt}</div>
						<div className="choice_seat_quantity seat">{item1.kupe.cunt}</div>
						<div className="choice_seat_quantity seat">{item1.lux.cunt}</div>
					</div>
					<div className="choice_price_group">
						<div className="choice_seat_start seat">{item1.sit.ot}</div>
						<div className="choice_seat_start seat">{item1.plackard.ot}</div>
						<div className="choice_seat_start seat">{item1.kupe.ot}</div>
						<div className="choice_seat_start seat">{item1.lux.ot}</div>
					</div>
					<div className="choice_price_group">
						<div className="choice_price seat">{item1.sit.price}</div>
						<div className="choice_price seat">{item1.plackard.price}</div>
						<div className="choice_price seat">{item1.kupe.price}</div>
						<div className="choice_price seat">{item1.lux.price}</div>
					</div>
				</div>

				<div className="choice_icon_services">
					<img src={servis} alt="itemservices" />
				</div>

				<div className="choice_button">
				<Link to="/ChoiceSeats" className="button3">Выбрать места</Link>
				</div>


			</div>
		</section>


	)
}

export default CardTickets;