async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/popular';
    const params = 'api_key=3aad8aaf513a9fc4cde034d9a4944177';
    const URL = `${baseURL}${path}?${params}`;
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    const movies = data.results;
    const movie = movies[0];
    // console.log(movies);
    console.log(movie.title);
  } catch (error) {
    console.error('Error', error);
  }
}

getPost();
