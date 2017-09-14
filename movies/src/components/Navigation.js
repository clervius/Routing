import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
	return (
		<ul className="mainNav">
			<li>
				<Link to="/">
					<i className="fa fa-home"></i>
					Home
				</Link>
			</li>
			<li>
				<Link to="/movies">
					<i className="fa fa-video-camera"></i>
					My Movies
				</Link>
			</li>
			<li>
				<Link to="/add">
					<i className="fa fa-plus-circle"></i>
					Add Movie 
				</Link>
			</li>
		</ul>
	)
}

export default Navigation;