import { createContext, useReducer } from "react";
import { postsReducer } from "../reducers/postReducer";
export const PostsContext = createContext();

const PostsContextProvider = (props) => {
  const [posts, dispatch] = useReducer(postsReducer, [
    {
      id: "1233321",
      title: "My first post",
      body: "This it my first post evvver",
    },
    {
      id: "412414",
      title: "My second post",
      body: "This it my second",
    },
    {
      id: "553251",
      title: "My third post",
      body: "This it my third ",
    },
  ]);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
