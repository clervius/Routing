const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
	{
		id: 0,
		title: 'The Godfather',
		director: 'Francis Ford Coppola',
		metascore: 100,
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
		img: 'http://abovethelaw.com/wp-content/uploads/2017/05/The-Godfather.jpg',
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		img: 'https://media.contentapi.ea.com/content/legacy/starwars-ea-com/en_US/starwars/battlefront/news-articles/collect-iconic-heroes-and-dominate-the-universe-in-star-wars-gal/_jcr_content/featuredImage/renditions/rendition1.img.jpg',
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
		img: 'https://img.cmovieshd.com/images/2016-03/movie-the-lord-of-the-rings-the-fellowship-of-the-ring-big.jpg',
	},
];

app.get('/movies', (req, res) => {
	res.send(movies);
});

app.get('/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
	res.send(movie);
});

app.post('/new-movie', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.send(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
