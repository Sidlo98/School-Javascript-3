import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { PostsContext } from "../contexts/PostsContext";
import actiontypes from "../reducers/actiontypes";

const PostItem = ({ post }) => {
  const { dispatch } = useContext(PostsContext);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const deletePost = () => {
    dispatch({
      type: actiontypes().posts.deletePost,
      id: post.id,
    });
  };

  return (
    <div
      onClick={deletePost}
      className="post"
      style={{ background: theme.ui, color: theme.text }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
