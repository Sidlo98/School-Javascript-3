const actiontypes = () => {
  return {
    auth: {
      login: "LOGIN",
      logout: "LOGOUT",
    },
    posts: {
      // getPosts: "GET_POSTS",
      setPosts: "SET_POSTS",
      loading: "LOADING",
      setPost: "SET_POST",
      addPost: "ADD_POST",
      // clearPost: "CLEAR_POST",
    },
  };
};

export default actiontypes;
