import React from "react";
import { useRef, useEffect } from 'react';
import '../css/spoiler.css';


function Spoiler() {
	const ref1 = useRef(null);
	let init = false;

	useEffect(() => {
		if (init) return;
		let spol = ref.current;
		console.log(spol);
		spol.addEventListener('click', (event) => {
			let nextSpol = spol.nextSubling;
			console.log(nextSpol);
			nextSpol.toggleClass('active');
		});
	
	init = true;
	}, []);
	return (
		<div className="block-spoiler one">
			<div className="block-spoiler__item">
				<div ref={ref1} className="block-spoiler__title">Туда</div>
				<div className="block-spoiler__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde omnis harum est porro ex beatae similique doloremque impedit modi quo aliquid deserunt optio, aut nisi laboriosam veniam? Tenetur, reiciendis sapiente?</div>
			</div>			
		</div>
	)

}

export default Spoiler;