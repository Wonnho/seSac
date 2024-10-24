const todos = [
  {
    todoId: 1,
    content: '예습하기',
    isCompleted: false,
  },
  {
    todoId: 2,
    content: '강의듣기',
    isCompleted: false,
  },
  {
    todoId: 3,
    content: '복습하기',
    isCompleted: false,
  },
];

todos.forEach((ind) => {
  console.log(ind);
});

const todoss = todos.map((num) => {
  return num;
});

console.log('todos object', todoss);

todos2 = [
  {
    todoId: 1,
    content: '예습하기',
    isCompleted: false,
  },
  {
    todoId: 2,
    content: '강의듣기',
    isCompleted: true,
  },
  {
    todoId: 3,
    content: '복습하기',
    isCompleted: true,
  },
];
const filtered_todos = todos2.filter((obj) => {
  // if (obj.isCompleted == 'true') return obj;
  return obj.isCompleted === true;
});

console.log('todos filtered:', filtered_todos);
