import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavLink({children, to, ...props}) {
	let resolved = useResolvedPath(to);
	let match = useMatch({path: resolved.pathname, end: true});

	return (
		<Link to = {to} className={match ? 'activeLink' : ''} {...props}>
		{children}
		</Link>
	)
}

export default NavLink;