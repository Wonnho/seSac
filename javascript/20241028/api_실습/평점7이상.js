const baseURL = 'https://api.themoviedb.org/3/movie';
const params = new URLSearchParams({
  api_key: 'eab8c9893e725b2e167187cef66bae3d',
  language: 'ko',
});

async function main() {
  // 1. 현재 상영중인 영화를 가져온다.
  const movies = await getNowPlayingMovies();

  const over7Movies = makeOver7Movies(movies);
  // console.log('평점 7이상 받은 현재 상영중인 영화:', over7Movies);
  const over7movies = movies.filter((movie) => movie.vote_average >= 7);
  console.log('filter 사용:평점 7이상 받은 현재 상영중인 영화:', over7movies);
}

/*
- 현재 상영중인 영화의 목록을 return한다. 
*/
async function getNowPlayingMovies() {
  const path = '/now_playing';

  let URL = `${baseURL}${path}?${params}`;

  const response = await fetch(URL);
  const data = await response.json();
  console.log('data', data);
  const movies = data.results;
  return movies;
}

// getNowPlayingMovies()

// movies on show beyond 7 point on average
function makeOver7Movies(movies) {
  const over7Movies = [];
  for (let movie of movies) {
    const voteAverage = movie.vote_average;
    if (voteAverage >= 7) {
      over7Movies.push(movie);
    }
  }
  return over7Movies;
}

main();
