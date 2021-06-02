import { useRef } from "react";

const AddTodoForm = ({ setTodosCallback }) => {
  const todoTitle = useRef();

  const onSub = (e) => {
    e.preventDefault();
    const title = todoTitle.current.value;
    setTodosCallback(title);
    todoTitle.current.value = "";
  };

  return (
    <div className="add-todo">
      <form className="container" onSubmit={onSub}>
        <input type="text" placeholder="Add Todo..." ref={todoTitle} />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
