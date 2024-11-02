// API 베이스 URL
const URL = 'http://localhost:3000/todos';

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.

document.addEventListener('DOMContentLoaded', initTodos);

async function initTodos() {
  console.log('Hello World');
  getTodo();
}

//get data from db.json or URL above

async function getTodo() {
  const response = await fetch(URL);
  const dataArray = await response.json();

  const todos = document.querySelector('.container>#todo-list');
  console.log(dataArray);
  // const divTag = document.querySelector('div');
  todos.classList.add('.todoList');

  // 해당 스타일을 담은 class를 직접 만들고, classList add하는게 좋은 방법.

  dataArray.forEach((data) => {
    // destruction
    const { id, content, completed } = data;

    const containerLI = document.createElement('li');
    // containerLI.setAttribute = 'display:flex;justify-content:space-around;';
    containerLI.setAttribute(
      'style',
      'display:flex; justify-content:space-around;background-color:aliceblue;border:1px solid black;border-radius:5px;padding:9px;margin-top:20px;'
    );

    const spanTag = document.createElement('span');
    const btnComplete = document.createElement('button');
    btnComplete.textContent = '완료';
    // first button attribute
    btnComplete.setAttribute(
      'style',
      'background-color:blue; color:white;padding:5px;border-radius:5px'
    );
    const btnDelete = document.createElement('button');
    btnDelete.textContent = '삭제';
    // second button attribute
    btnDelete.setAttribute(
      'style',
      'background-color:green; color:white;padding:5px;border-radius:5px'
    );

    spanTag.textContent = data.content;
    spanTag.setAttribute('style', 'display:flex;align-items:center');

    containerLI.append(spanTag);
    containerLI.append(btnComplete);
    containerLI.append(btnDelete);

    todos.append(containerLI);

    btnComplete.addEventListener('click', () => {
      btnComplete.classList.toggle('completed');
      spanTag.classList.toggle('completed');
    });

    btnDelete.addEventListener('click', () => {
      // btnDelete.classList.remove('containerLi');
      containerLI.remove();
      deleteTodo(id);
      console.log('삭제');
    });
  });
}

const btn = document.querySelector('#add-todo');
btn.addEventListener('click', (e) => {
  const target = e.tartget;
  const input = document.querySelector('#todo-input');
  const value = input.value;
  postTodo(value);
});

// HTTP Post 요청 함수
// Todo의 content 가 필요
async function postTodo(value) {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      //resource를 만들 때 필요한 데이터
      content: value, //`${value}`
      completed: false,
    }),
  });
  const data = await response.json();
  console.log(data);

  const todos = document.querySelector('.container>#todo-list');
  todos.classList.add('.todoList');

  // destruction
  const { id, content, completed } = data;

  const containerLI = document.createElement('li');
  containerLI.setAttribute(
    'style',
    'display:flex; justify-content:space-around;background-color:aliceblue;border:1px solid black;border-radius:5px;padding:9px;margin-top:20px;'
  );

  const spanTag = document.createElement('span');
  const btnComplete = document.createElement('button');
  btnComplete.textContent = '완료';
  // first button attribute
  btnComplete.setAttribute(
    'style',
    'background-color:blue; color:white;padding:5px;border-radius:5px'
  );
  const btnDelete = document.createElement('button');
  btnDelete.textContent = '삭제';

  // second button attribute
  btnDelete.setAttribute(
    'style',
    'background-color:green; color:white;padding:5px;border-radius:5px'
  );

  spanTag.textContent = data.content;
  spanTag.setAttribute('style', 'display:flex;align-items:center');

  containerLI.append(spanTag);
  containerLI.append(btnComplete);
  containerLI.append(btnDelete);

  todos.append(containerLI);

  btnComplete.addEventListener('click', () => {
    btnComplete.classList.toggle('completed');
    spanTag.classList.toggle('completed');
  });

  btnDelete.addEventListener('click', () => {
    // btnDelete.classList.remove('containerLi');
    containerLI.remove();
    deleteTodo(id);
    console.log('삭제');
  });
}

const button = document.querySelector('#add-todo');
button.addEventListener('click', (e) => {
  const target = e.tartget;
  const input = document.querySelector('#todo-input');
  const value = input.value;
  postTodo(value);
});

// const URL = 'http://localhost:3000/todos / {id}';
async function deleteTodo(id) {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
}
