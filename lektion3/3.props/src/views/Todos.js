import TodoItem from "../components/TodoItem";

const Todos = ({ todos, deleteTodoCallback }) => {
  return (
    <div className="todos">
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodoCallback={deleteTodoCallback}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "2Frem" }}>
          No Todos Left
        </h2>
      )}
    </div>
  );
};

export default Todos;
