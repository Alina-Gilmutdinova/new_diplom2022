import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";



function LastTickets({items}) {
	const elements = items.map((item) =>
		 <Card item={item} key={item.id}/>);

	return  elements	
}

LastTickets.defaultProps = {
	items: []
};

export default LastTickets;

LastTickets.propTypes = {
	items: PropTypes.arrayOf(
		 PropTypes.shape({
			fromcity: PropTypes.string,
			tocity: PropTypes.string,
			fromrailway: PropTypes.string,
			torailway: PropTypes.string,
			price: PropTypes.string,
		 })
	).isRequired,
};