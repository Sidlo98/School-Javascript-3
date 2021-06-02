const TodoTitle = ({ todo, toggleCompleteCallback }) => {
  const toggle = () => {
    toggleCompleteCallback(todo.id);
    // todo.completed = !todo.completed
    // console.log(todo.completed)
  };

  return (
    <h2
      onClick={toggle}
      className={`todo-title ${todo.completed ? "complete" : ""}`}
    >
      {todo.title}
    </h2>
  );
};

export default TodoTitle;
