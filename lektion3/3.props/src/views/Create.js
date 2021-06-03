import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = ({ addTodoCallback }) => {
  const history = useHistory();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoCallback(title);
    setTitle("");
    history.push("/");
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
};

export default Create;
