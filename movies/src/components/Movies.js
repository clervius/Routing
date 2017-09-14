import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';


class Movies extends Component {

	componentDidMount() {
		this.props.getMovies();
	}
	render() {
		return (
			<div className="holder">
				<ul className="row movieList">
					{this.props.movies.map((movie, i) => {
						return 	(
							<li className="col-4" key={i +'movie.title'}>
								<Card  className="cardBlock">
									<CardImg top width="100%" style={{backgroundImage: "url(" +movie.img +")"}} />
									<CardBlock>
										<Link className="cardTitleLink" to={'/movies/' + movie.id}>{movie.title} </Link>

										
									</CardBlock>									
								</Card>
							</li>
							)
					})}
					<li className="col-4">
						<Link to="/add" className="addMovieLink">
							<i className="fa fa-plus-circle"></i>
							Add Movie
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		movies: state.movies
	};
};
export default connect(mapStateToProps, { getMovies})(Movies);