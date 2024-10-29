// TMDB API 사용을 위한 기본 설정
const API_KEY = '3aad8aaf513a9fc4cde034d9a4944177'; // 여기에 본인의 TMDB API 키를 입력해야 합니다
const BASE_URL = 'https://api.themoviedb.org/3';

// 현재 상영중인 영화 조회 함수
async function getNowPlayingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const data = await response.json();
    
    // 영화 제목과 평점만 추출하여 정리
    const movieRatings = data.results.map(movie => ({
      title: movie.title,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      overview: movie.overview
    }));

    // 평점 순으로 정렬
    movieRatings.sort((a, b) => b.rating - a.rating);
    
    // 결과 출력
    movieRatings.forEach(movie => {
      console.log(`영화: ${movie.title}`);
      console.log(`평점: ${movie.rating}`);
      console.log(`개봉일: ${movie.release_date}`);
      console.log(`줄거리: ${movie.overview}`);
      console.log('------------------------');
    });

  } catch(error) {
    console.error('Error:', error);
  }
}

// 더 상세한 정보를 보여주는 버전
async function getNowPlayingMoviesDetailed() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
    );
    const data = await response.json();
    
    const movieDetails = await Promise.all(
      data.results.map(async (movie) => {
        // 각 영화의 상세 정보 추가 조회
        const detailResponse = await fetch(
          `${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=ko-KR`
        );
        const detailData = await detailResponse.json();
        
        return {
          title: movie.title,
          rating: movie.vote_average,
          releaseDate: movie.release_date,
          overview: movie.overview,
          genres: detailData.genres.map(genre => genre.name),
          runtime: detailData.runtime,
          voteCount: movie.vote_count
        };
      })
    );

    // 평점 순으로 정렬
    movieDetails.sort((a, b) => b.rating - a.rating);
    
    // 상세 결과 출력
    movieDetails.forEach(movie => {
      console.log(`제목: ${movie.title}`);
      console.log(`평점: ${movie.rating} (투표수: ${movie.voteCount})`);
      console.log(`장르: ${movie.genres.join(', ')}`);
      console.log(`상영시간: ${movie.runtime}분`);
      console.log(`개봉일: ${movie.releaseDate}`);
      console.log(`줄거리: ${movie.overview}`);
      console.log('------------------------');
    });

  } catch(error) {
    console.error('Error:', error);
  }
}

// 영화 검색 함수
async function searchMovies(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${encodeURIComponent(query)}&page=1`
    );
    const data = await response.json();
    
    const searchResults = data.results.map(movie => ({
      title: movie.title,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      overview: movie.overview
    }));

    console.log(`"${query}" 검색 결과:`);
    searchResults.forEach(movie => {
      console.log(`영화: ${movie.title}`);
      console.log(`평점: ${movie.rating}`);
      console.log(`개봉일: ${movie.releaseDate}`);
      console.log(`줄거리: ${movie.overview}`);
      console.log('------------------------');
    });

  } catch(error) {
    console.error('Error:', error);
  }
}

// 함수 실행
getNowPlayingMovies();
// getNowPlayingMoviesDetailed();  // 더 상세한 정보가 필요할 경우
// searchMovies("원하는 영화 제목");  // 특정 영화 검색할 경우