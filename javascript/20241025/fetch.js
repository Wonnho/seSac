fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json()) // 응답 데이터를 JSON으로 변환
  .then((json) => {
    const title = json.title;
    console.log(title);
  }) // 데이터를 처리
  .catch((error) => console.error('Error:', error)); // 에러 처리

async function getPost() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  const data = await response.json();
  console.log(data);
}

getPost(3);

async function getPost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  console.log(data);
}

getPost(3);

// 함수이름을  변경한다. 어디서 가져오는지 명확하게 인지하게
async function getPostById(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  console.log(data);
}

getPostById(2);

//retrieve all post

async function getPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await response.json();
  const titles = data.map((value) => value.title);
  console.log(titles);
}

getPosts();



async function getPosts() {
  const response=await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data=await response.json();
  data.forEach((value)=>{
    console.log(value.title)
  })
  console.log(data)
}

getPosts()

// POST
async function createPost() {
  try {
    const resonse=await fetch('https://jsonplaceholder.typicode.com/posts',
      {
        method:'POST',
        title:JSON.stringify({
          title:'beer',
          body:'beer Festival in Germany',
          userId:1,
        }),
        headers:{
          'Content-type':'application/json;charset=UTF-8',
        },
      }
    );

    const data=await resonse.json();
    console.log(data);

  }catch(error) {
    console.error('Error',error);
  }
}

createPost()

//update
async function updatePost() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
console.log('update')
updatePost();


//삭제

async function deletePost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
  const text = await response.text();
  console.log(text);
}

console.log('id,1, deleted')
deletePost()