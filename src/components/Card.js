import React from "react";
import '../css/lastTickets.css';
import icons from '../img/svg/services.svg';

function Card({item}) {
	
	return (
		<section className="last_ticket_container">
			<div className="last_ticket">
				<div className="last_ticket_inside">
					<div className="last_ticket_choice">
						<div className="last_ticket_city_left">{item.fromcity}</div>
						<div className="railway_station_transparent_left">{item.fromrailway}<br/> вокзал</div>
					</div>
					<div className="last_ticket_choice">
						<div className="last_ticket_city">{item.tocity}</div>
						<div className="railway_station_transparent">{item.torailway} <br/>вокзал</div>
					</div>
				</div>
				<div className="last_ticket_inside">
					<div className="item_services">
						<img src={icons} alt="icon_services" />
					</div>
					<div className="last_ticket_footer">
						<div className="choice_seat_start">от</div>
						<div className="last_ticket_price">{item.price}</div>
						<span className="price">&#8399;</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Card;