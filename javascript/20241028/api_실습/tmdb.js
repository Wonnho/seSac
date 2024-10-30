// 접속 시험
// const url = 'https://api.themoviedb.org/3/tv/popular?api_key=3aad8aaf513a9fc4cde034d9a4944177';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTcyOTgzMDY3MS42NzI4ODksInN1YiI6IjYzZjk4ZTI5NmFhOGUwMDBjNjJiZGQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B0Q73moiWLEWFATm3lNzSjfU_fhuRdoh4ZhmAFzJyZY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

//대중적인 영화 첫번째 제목 가져오기
async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/popular';
    const params = 'api_key=3aad8aaf513a9fc4cde034d9a4944177';
    const URL = `${baseURL}${path}?${params}`;
    const response = await fetch(URL);
    const data = await response.json();
    const movies = data.results;
    const movie = movies[0];
    //  console.log(movies)
    console.log('movie titles:', movie.title);
  } catch (error) {
    'Error', error;
  }
}

getPost();

// maximal average rating out of movies playing now
//plus movie name having maximal average rating

async function getHighRating() {
  const baseURL = 'https://api.themoviedb.org/3/movie';
  const path = '/popular';
  const params = 'api_key=3aad8aaf513a9fc4cde034d9a4944177';
  const URL = `${baseURL}${path}?${params}`;

  const response = await fetch(URL);
  const data = await response.json();
  const movies = data.results;

  let max_rating = 0;
  let maxRatingMovie = null;

  for (let movie of movies) {
    let rating = movie.vote_average;
    if (max_rating < rating) {
      max_rating = rating;
      maxRatingMovie = movie.title;
    }
  }
  console.log('highest rating of movie:', max_rating);
  console.log('movie having maximal average rating: ', maxRatingMovie);
}

getHighRating();


// maximal average rating out of movies playing now via reduce
//plus movie name having maximal average rating

async function getVoteAvg() {

  try {
    const baseURL='https://api.themoviedb.org/3/movie'
  }
}