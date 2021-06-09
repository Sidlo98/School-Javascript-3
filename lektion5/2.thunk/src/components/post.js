import { Link } from "react-router-dom";

const post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body.slice(0, 50)}...</p>
      </Link>
    </div>
  );
};

export default post;
