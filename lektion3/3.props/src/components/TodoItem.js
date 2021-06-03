const TodoItem = ({ todo, deleteTodoCallback }) => {
  return (
    <div className="todo-item" onClick={() => deleteTodoCallback(todo.id)}>
      <h2>{todo.title}</h2>
    </div>
  );
};

export default TodoItem;
