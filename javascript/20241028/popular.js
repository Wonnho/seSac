async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    // const path = '/popular';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: '3aad8aaf513a9fc4cde034d9a4944177',
      language: 'ko',
    });
    // const params = 'api_key=eab8c9893e725b2e167187cef66bae3d';

    const URL = `${baseURL}${path}?${params}`;
    // const URL =
    //   'https://api.themoviedb.org/3/movie/popular?api_key=eab8c9893e725b2e167187cef66bae3d';

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;
    const movie = movies[0];

    console.log(movie.title);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
