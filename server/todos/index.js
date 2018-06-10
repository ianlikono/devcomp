const todos = [];
let id = 1;

const addTodos = (req, res) => {
  const { text } = req.body;
  const newTodo = {
    text,
    id,
  };
  todos.push(newTodo);
  id += 1;
  res.status(200).send(todos);
};

const getTodos = (req, res) => {
  res.status(200).send(todos);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  let indexOfTodo = todos.findIndex(todo => todo.id == id);
  todos.splice(indexOfTodo, 1);
  res.status(200).send(todos);
};

const updateTodo = (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  let indexOfTodo = todos.findIndex(todo => todo.id == id);
  todos[indexOfTodo].text = text;

  res.status(200).send(todos);
};

export default {
  addTodos,
  getTodos,
  deleteTodo,
  updateTodo,
};
