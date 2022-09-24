import { useRef, useEffect } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import '../css/filter.css';


function Filter() {
	const ref = useRef(null);
	let init = false;

	useEffect(() => {
		if (init) return;
		noUiSlider.create(ref.current, {
			start: ['0', '4500'],
			connect: true,
			step: 1,
			tooltips: true,
			format: {
				to: function (value) {
					return parseInt(value);
				},
				from: function (value) {
					return parseInt(value);
				},
			},
			range: {
				'min': 1920,
				'max': 7000
			},

		});
		init = true;
	}, []);

	return (

		<div className='filter__body'>
			<div className='filter__title'>Стоимость</div>
			<div className='fromTo'>
				<span>от</span>
				<span>до</span>
			</div>
			<div id=" slider" className='filter__range' ref={ref}></div>
			<div className='fromToNumb'>
				<span>1970</span>
				<span>7000</span>
			</div>
		</div>
	)
};

export default Filter;