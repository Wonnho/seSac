async function readTodos() {
  /*
    GET /todos : 전체 리소스를 요청하는 엔드포인트
  */
  const response = await fetch("http://localhost:3000/todos");
  const todos = await response.json();
  return todos;
}

async function readTodosExample() {
  let response = await readTodos();
  console.log(response);
}

readTodosExample();

//post

async function createTodo(newTodo) {
  /*
    POST /todos : 리소스 생성을 요청하는 엔드포인트
  */
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body : 생성할 리소스 정보를 전송
    body: JSON.stringify(newTodo),
  });
  const todo = await response.json();
  return todo;
}

async function createTodoExample() {
  /*
    newTodo : 생성할 리소스 정보
  */
  let newTodo = {
    id: 3,
    content: "복습 하기",
    completed: false,
  };

  let response = await createTodo(newTodo);
  console.log(response);
}

createTodoExample();

//put
async function updateTodo(id, todo) {
  /*
    PUT /todos : 특정 id 리소스 수정
  */
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    // body : 수정할 리소스 정보를 전송
    body: JSON.stringify(todo),
  });
  const updatedTodo = await response.json();
  return updatedTodo;
}

async function updateTodoExample() {
  /*
    todo : 수정 리소스 정보
    id : 수정할 리소스 id
  */
  let todo = {
    id: 2,
    content: "문제 풀기",
    completed: false,
  };

  let id = 2;
  let response = await updateTodo(id, todo);
  console.log(response);
}

updateTodoExample();