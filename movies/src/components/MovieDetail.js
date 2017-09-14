import React, { Component } from 'react';
import { singleMovie } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class MovieDetail extends Component {
	componentDidMount() {
		this.props.singleMovie(this.props.match.params.id);
	}
	render() {
		const movie = this.props.movie;
		const stars = this.props.movie.stars;
		if (!this.props.movie.stars) return null;
		return (
			<div className="holder">
				<Link to="/movies" className="breadCrumbLink">
					<i className="fa fa-arrow-left"></i>
					Back to your movies
				</Link>
				<br/><br />
				<div className="row">
					<div className="col-4">
						<img src={movie.img} className="img-fluid shadow1" />
					</div>
					<div className="col-8 text-left">
						<h3>
							{movie.title}
						</h3>
						<p>{movie.director}</p>
						
						<ul className="list-inline">
							<li>
								<h6>
									MetaScore
									<small className="block">{this.props.movie.metascore}</small>
								</h6>
							</li>
						</ul>
						<h6>Cast</h6>
						<ul className="list-inline">
							{this.props.movie.stars.map((star,i) => {
								return <li key={star + i} className="list-inline-item"> - {star} </li>
							})}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movie: state.movie
	}
}

export default connect(mapStateToProps, { singleMovie })(MovieDetail);

