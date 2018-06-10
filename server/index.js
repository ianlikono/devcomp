import bodyParser from "body-parser";
import express from "express";
import Todos from "./todos";
import Tweets from "./twitter";

const port = 8080;

const app = express();

app.use(bodyParser.json());

app.get("/api/tweets", Tweets.getTweets);
app.get("api/todos", Todos.getTodos);
app.post("/api/todos", Todos.addTodos);
app.delete("/api/todos/:id", Todos.deleteTodo);
app.put("/api/todos/:id", Todos.updateTodo);

app.listen(port, () => console.log(`listening on port ${port}`));
