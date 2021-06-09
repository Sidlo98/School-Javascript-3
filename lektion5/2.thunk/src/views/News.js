import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions/postsActions";
import Post from "../components/post";

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.postsReducer.posts);
  const loading = useSelector((state) => state.postsReducer.loading);

  return (
    <div>
      <h1>News</h1>
      {loading && !posts.length && <p>Loading...</p>}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default News;
