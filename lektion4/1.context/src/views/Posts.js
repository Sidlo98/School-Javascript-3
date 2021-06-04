import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { PostsContext } from "../contexts/PostsContext";
import PostItem from "../components/PostItem";

const Posts = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { posts } = useContext(PostsContext);

  return (
    <div className="posts">
      {posts.length ? (
        posts.map((post) => <PostItem post={post} key={post.id} />)
      ) : (
        <h2 style={{ color: theme.text }}>No posts to show</h2>
      )}
    </div>
  );
};

export default Posts;
