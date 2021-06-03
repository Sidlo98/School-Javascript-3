import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Todos from "./views/Todos";
import Create from "./views/Create";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "hasdadadad",
      title: "Todo Item 1",
    },
    {
      id: "hasafwafaf",
      title: "Todo Item 2",
    },
    {
      id: "fsdfdsfsf",
      title: "Todo Item 3",
    },
  ]);

  const addTodoCallback = (title) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Date.now().toString(), title }];
    });
  };

  const deleteTodoCallback = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Todos todos={todos} deleteTodoCallback={deleteTodoCallback} />
            )}
          />
          <Route exact path="/create">
            <Create addTodoCallback={addTodoCallback} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
