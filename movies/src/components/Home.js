import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h3>React Router & Redux Sample Project</h3>
			<p>
				Use the navigation links above to browse contents of this SPA.
				<br />
				The 'Movies' page has additional navigation.
			</p>
			<Link className="ctaBtn" to="/movies">My Movies</Link>

		</div>
	)
}

export default Home;