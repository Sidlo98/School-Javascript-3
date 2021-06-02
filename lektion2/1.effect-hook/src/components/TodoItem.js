import { useState } from "react";
import ChangeTodo from "./ChangeTodo";
import TodoTitle from "./TodoTitle";

const TodoItem = ({
  todo,
  changeTodoCallback,
  toggleCompleteCallback,
  removeTodoCallback,
}) => {
  const [change, setChange] = useState(false);

  const toggleChange = () => {
    setChange(!change);
  };

  const changeTodo = (text) => {
    changeTodoCallback(todo.id, text);
    // todo.title = text;
    setChange(false);
  };

  const deleteTodo = () => {
    removeTodoCallback(todo.id);
  };

  return (
    <div className="todo-item">
      {/* <h2>{todo.title}</h2> */}
      {/* <TodoTitle todo={todo} /> */}
      {/* <ChangeTodo todo={todo} /> */}

      {change ? (
        <ChangeTodo todo={todo} changeTodo={changeTodo} />
      ) : (
        <TodoTitle
          todo={todo}
          toggleCompleteCallback={toggleCompleteCallback}
        />
      )}

      <div className="buttons">
        <button className="btn change-btn" onClick={toggleChange}>
          change
        </button>
        <button className="btn delete-btn" onClick={deleteTodo}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
