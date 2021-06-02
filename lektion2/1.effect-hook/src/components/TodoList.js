import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  changeTodoCallback,
  toggleCompleteCallback,
  removeTodoCallback,
}) => {
  return (
    <div className="todo-list">
      <div className="container">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            changeTodoCallback={changeTodoCallback}
            toggleCompleteCallback={toggleCompleteCallback}
            removeTodoCallback={removeTodoCallback}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
