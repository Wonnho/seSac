const baseURL = 'https://api.themoviedb.org/3/movie';
// const path = '/now_playing';
const params = new URLSearchParams({
  api_key: '3aad8aaf513a9fc4cde034d9a4944177',
  language: 'ko',
});

async function main() {
  const movies = await getNowPlayingMovies(); // playing movies at spot
  const movie = getPopularMovie(movies); // get the max average rate
  let movieId = movie.id;
  const detailMovie = await getDetailMovie(movieId);
  console.log('revenue', detailMovie.revenue);
}

// const URL = `${baseURL}${path}?${params}`;

async function getNowPlayingMovies() {
  const path = '/now_playing';
  let URL = `${baseURL}${path}?${params}`;
  const response = await fetch(URL);
  const data = await response.json();
  const movies = data.results;

  // console.log('movies', movies);
  return movies;
}

// getPopularMovie는 동기함수이다. getNowPlayingMovies()함수가 가져온 데이터를 활용한다.
function getPopularMovie(movies) {
  const maxVoteMovie = movies.reduce((acc, cur) => {
    const accVoteAverage = acc.vote_average;
    const curVoteAverage = cur.vote_average;

    if (accVoteAverage > curVoteAverage) {
      return acc;
    } else if (accVoteAverage < curVoteAverage) {
      return cur;
    }
  });
  console.log(maxVoteMovie);
  return maxVoteMovie;
}

// // observe the process of the getPopularMovie()
// async function func() {
//   const movies = await getNowPlayingMovies();
//   const average = getPopularMovie(movies);
//   console.log(average);
// }

// func();

async function getDetailMovie(movieID) {
  const path = `/${movieID}`;
  const URL = `${baseURL}${path}?${params}`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
}

main();
