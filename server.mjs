import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let todos_list = [
  {
    id: 1660044242178,
    title: "Complete expressJS CRUD assignment.",
    isCompleted: false,
  },
  {
    id: 1660044242179,
    title: "Take rest and have some video games.",
    isCompleted: false,
  },
  {
    id: 1660044242180,
    title: "Browse some new libraries to makewebsite interactive.",
    isCompleted: false,
  },
  {
    id: 1660044242181,
    title: "Don't eat.",
    isCompleted: false,
  },
];

app.get("/index", (req, res) => {
  res.json(todos_list);
  console.log("todos list sent");
});

app.post("/create", (req, res) => {
  const todo = { id: Date.now(), title: req.body.title, isCompleted: false };
  todos_list.push(todo);
  res.send(todos_list);
  console.log("todo added = ", req);
});

app.put("/update/:todoId", (req, res) => {
  const todoId = req.params.todoId;

  todos_list = todos_list.map((todo) => {
    if (todo.id == todoId) {
      todo = {
        id: todo.id,
        title: req.body.title,
        isCompleted: false,
      };
    }
    return todo;
  });

  res.send(todos_list);
  console.log("todo updated");
});

app.delete("/delete/:todoId", (req, res) => {
  const todoId = req.params.todoId;

  todos_list = todos_list.filter((todo) => {
    if (todo.id != todoId) {
      return todo;
    }
  });
  res.send(todos_list);
  console.log("todo deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
