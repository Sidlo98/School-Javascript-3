import { useRef, useEffect } from "react";

const ChangeTodo = ({ todo, changeTodo }) => {
  const text = useRef();

  useEffect(() => {
    text.current.value = todo.title;
  });

  const change = (e) => {
    e.preventDefault();
    todo.title = text.current.value;
    changeTodo(text.current.value);
  };

  return (
    <form className="change-todo" onSubmit={change}>
      <input type="text" ref={text} /> <button>OK</button>
    </form>
  );
};

export default ChangeTodo;
