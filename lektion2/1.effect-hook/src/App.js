import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Take out the trash",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Clean the office",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Dinner with wifey",
      completed: false,
    },
  ]);

  const setTodosCallback = (todoTitle) => {
    setTodos((prevTodos) => {
      return [
        { id: uuidv4(), title: todoTitle, completed: false },
        ...prevTodos,
      ];
    });
    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const changeTodoCallback = (id, newTitle) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
          return todo;
        }
        return todo;
      });
    });
    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleCompleteCallback = (id) => {
    // setTodos((prevTodos) => {
    //   return prevTodos.map((todo) => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //       console.log(todo.completed);
    //       return todo;
    //     }
    //     return todo;
    //   });
    // });

    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });

    newTodos.sort((a, b) => {
      if (a.completed) return 1;
      return -1;
    });

    setTodos(newTodos);

    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeTodoCallback = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  return (
    <div className="app">
      <Header title="Todos" />
      <AddTodoForm setTodosCallback={setTodosCallback} />
      <TodoList
        todos={todos}
        changeTodoCallback={changeTodoCallback}
        toggleCompleteCallback={toggleCompleteCallback}
        removeTodoCallback={removeTodoCallback}
      />
    </div>
  );
}

export default App;
