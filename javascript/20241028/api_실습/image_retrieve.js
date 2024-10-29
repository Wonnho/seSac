const url = 'https://api.themoviedb.org/3/configuration';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTcyOTgzMDY3MS42NzI4ODksInN1YiI6IjYzZjk4ZTI5NmFhOGUwMDBjNjJiZGQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B0Q73moiWLEWFATm3lNzSjfU_fhuRdoh4ZhmAFzJyZY'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));