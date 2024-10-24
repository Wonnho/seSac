let todos = [
  { todoId: 1, content: '예습하기', isCompleted: false },
  { todoId: 2, content: '강의듣기', isCompleted: true },
  { todoId: 3, content: '복습하기', isCompleted: true },
];

// let completedTodos = todos.filter((todo) => todo.isCompleted);

let completedTodos = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

completedTodos.forEach((todo) => console.log(todo));

// 또는

todos.forEach((todo) => {
  if (todo.isCompleted === true) {
    console.log(todo);
  }
});
