import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { PostsContext } from "../contexts/PostsContext";
import actiontypes from "../reducers/actiontypes";

const CreatePost = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { dispatch } = useContext(PostsContext);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const onSub = (e) => {
    e.preventDefault();
    dispatch({ type: actiontypes().posts.addPost, post: { title, body } });
    setTitle("");
    setBody("");
    history.push("/");
  };

  return (
    <form className="create-post" onSubmit={onSub}>
      <div className="input-group">
        <label htmlFor="title" className="input-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          style={{ background: theme.bg, color: theme.text }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="body" className="input-label">
          Body:
        </label>
        <textarea
          className="form-control"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button className="btn btn-form">Create Post</button>
    </form>
  );
};

export default CreatePost;
