// first code
async function fetchUrl(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetchUrl(url);

//another code
const response = fetch(url);
//console.log(response); // data가 안옴

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });

// more condensed code

async function fetchUrl(url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}
