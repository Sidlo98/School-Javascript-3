import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOnePost, setPost } from "../store/actions/postsActions";

const PostDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  // const id  = useParams().id
  // console.log(id)

  useEffect(() => {
    dispatch(getOnePost(id));

    return () => {
      //cleanUp
      dispatch(setPost(null));
    };
  }, [dispatch, id]);

  const post = useSelector((state) => state.postsReducer.post);
  const loading = useSelector((state) => state.postsReducer.loading);

  return (
    <div>
      {loading && !post && <p>Loading...</p>}

      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
