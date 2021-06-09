import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/actions/postsActions";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSub = async (e) => {
    e.preventDefault();
    await dispatch(addPost(title, body));
    // setTitle("");
    // setBody("");
    history.push("/");
  };

  return (
    <form className="create" onSubmit={handleSub}>
      <h1>Create</h1>
      <div className="input-group">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="body">Body: </label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button>ADD POST</button>
    </form>
  );
};

export default Create;
