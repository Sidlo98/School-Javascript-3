import { useState } from "react";
import "./post.css";

const Post = ({ title, body }) => {
  const [isDark, setIsDark] = useState(false);

  const setTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="mb-2">
      <div className={`card ${isDark ? 'dark' : ''}` }>
        <h2>{title}</h2>
        <p className="mb-2">{body}</p>
        <button onClick={setTheme}>
          {isDark ? "Change to light" : "Change to dark"}
        </button>
      </div>
    </div>
  );
};

export default Post;
