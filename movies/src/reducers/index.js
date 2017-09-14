import { combineReducers } from 'redux';
import { GET_MOVIES, ADD_MOVIE, SINGLE_MOVIE } from '../actions';

const moviesReducer = (movies = [], action) => {
	switch(action.type) {
		case GET_MOVIES:
			return action.payload.data;
		case ADD_MOVIE:
			return action.payload.data;
		default:
			return movies;
	}
};

const singleMovieReducer = (single = {}, action) => {
	switch(action.type) {
		case SINGLE_MOVIE:
			console.log(action.payload.data.stars[0]);
			return action.payload.data;
		default:
			return single;
	}
};

const rootReducer = combineReducers({
	movies: moviesReducer,
	movie: singleMovieReducer
});

export default rootReducer;