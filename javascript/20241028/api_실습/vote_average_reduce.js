async function getVoteAvg() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';

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
    // console.log(data)
    const movies = data.results;

    let maxVoteMovie = null;
    let maxVoteAverage = 0;
    for (let movie of movies) {
      let voteAverage = movie.vote_average;
      if (voteAverage > maxVoteAverage) {
        maxVoteAverage = voteAverage;
        maxVoteMovie = movie;
      }
    }
    console.log(maxVoteAverage);
    console.log('movie title', maxVoteMovie);

    //  more complicated approach
    console.log('use reduce')
    const maxVoteMovie2 = movies.reduce((acc, cur) => {
      const accvoteAverage = acc.vote_average;
      const curVoteAverage = cur.vote_average;
      if (accvoteAverage > curVoteAverage) {
        return acc;
      } else if (accvoteAverage < curVoteAverage) {
        return cur;
      } else {
        const accvoteCount = acc.vote_count;
        const curVoteCount = cur.vote_count;
      }
    });
    console.log(maxVoteMovie2.title);
  } catch (error) {
    console.error('Error:', error);
  }
}

getVoteAvg();
