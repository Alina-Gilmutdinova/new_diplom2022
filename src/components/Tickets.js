import React from "react";
import PropTypes from "prop-types";
import CardTickets from "./CardTicket";



function Tickets({items1}) {
	const elements = items1.map((item1) =>
		 <CardTickets item1={item1} key={item1.id}/>);

	return  elements	
}

Tickets.defaultProps = {
	items1: []
};

export default Tickets;

Tickets.propTypes = {
	items1: PropTypes.arrayOf(
		 PropTypes.shape({
			choice_number: PropTypes.string,
			fromcity: PropTypes.string,
			tocity: PropTypes.string,
			fromrailway: PropTypes.string,
			torailway: PropTypes.string,
			fromtime: PropTypes.string,
			totime: PropTypes.string,
			starttime: PropTypes.string,
			volga: PropTypes.string,
			tip: PropTypes.string,
			cunt: PropTypes.string,
			price: PropTypes.string,
			id: PropTypes.number,
		 })
	).isRequired,
};