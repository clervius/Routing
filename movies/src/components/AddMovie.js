import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, addMovie } from '../actions';
import { FormGroup } from 'reactstrap';
import TextField from 'material-ui/TextField'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';

class AddMovie extends Component {
	componentDidMount() {
		this.props.getMovies();
	}
	handleForm(e) {
		e.preventDefault();
		const options = {
			id: this.props.movies.length + 1,
			title: e.target.title.value,
			img: e.target.img.value,
			metascore: e.target.metascore.value,
			director: e.target.director.value,
			stars: [
				e.target.star1.value,
				e.target.star2.value,
				e.target.star3.value
			]
		}

		this.props.addMovie(options);
	}	
	render() {
		return (
			<div className="holder">
				<h3>Add A Movie</h3>
				<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
					<form className="text-left" onSubmit={(e) => this.handleForm(e)} id="newMovie">
						<FormGroup>
							<TextField hintText="Title" floatingLabelText="Movie Title" name="title"/>
						</FormGroup>
						<FormGroup>
							<TextField hintText="Enter Link" floatingLabelText="Movie Picture" name="img"/>
						</FormGroup>
						<div className="row">
							<div className="col-6">	
								<FormGroup>
									<TextField hintText="Enter Name" floatingLabelText="Director" name="director" />
								</FormGroup>
							</div>
							<div className="col-6">	
								<FormGroup>
									<TextField hintText="Enter Score" floatingLabelText="Meta Score" name="metascore" />
								</FormGroup>
							</div>
						</div>
						<div className="row">
							<div className="col-4">	
								<FormGroup>
									<TextField hintText="Enter Name" floatingLabelText="Star 1" name="star1" />
								</FormGroup>
							</div>
							<div className="col-4">	
								<FormGroup>
									<TextField hintText="Enter Name" floatingLabelText="Star 2" name="star2" />
								</FormGroup>
							</div>
							<div className="col-4">	
								<FormGroup>
									<TextField hintText="Enter Name" floatingLabelText="Star 3" name="star3" />
								</FormGroup>
							</div>
						</div>
						<RaisedButton label="Add Movie" primary={true} type="submit" />
					</form>
				</MuiThemeProvider>
				
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		movie: state.movies
	}
};

export default connect(mapStateToProps, { getMovies, addMovie })(AddMovie);