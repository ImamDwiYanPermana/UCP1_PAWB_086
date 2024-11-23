const express = require("express");
const todoRoutes = require("./routes/todo.js");
const pupuk_todosRoutes = require("./routes/pupuk_todo.js");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/todos", todoRoutes);
app.use("/pupukkk", pupuk_todosRoutes);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
