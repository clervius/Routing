import axios from 'axios';
const serverAddress = 'http://localhost:5000/';
const server = {
	getMovies: serverAddress + 'movies',
	addMovie: serverAddress + 'new-movie'
};

export const GET_MOVIES = 'GET_MOVIES';
export const getMovies = () => {
	const promise= axios.get(server.getMovies);
	return {
		type: GET_MOVIES,
		payload: promise
	}
};

export const ADD_MOVIE = 'ADD_MOVIE';
export const addMovie = (options) => {
	const promise = axios.post(server.addMovie, options);
	document.getElementById("newMovie").reset();
	return {
		type: ADD_MOVIE,
		payload: promise
	}
};

export const SINGLE_MOVIE = 'SINGLE_MOVIE';
export const singleMovie = (id) => {
	const payload = axios.get(server.getMovies + '/' + id);
	return {
		type: SINGLE_MOVIE,
		payload,
	}
};