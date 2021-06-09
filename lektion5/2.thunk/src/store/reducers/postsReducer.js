import actiontypes from "../actiontypes";

const initState = {
  posts: [],
  post: null,
  loading: false,
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().posts.setPosts:
      return {
        ...state,
        posts: action.payload,
      };

    case actiontypes().posts.setPost:
      return {
        ...state,
        post: action.payload,
      };
    case actiontypes().posts.loading:
      return {
        ...state,
        loading: action.payload,
      };
    // case actiontypes().posts.clearPost:
    //   return {
    //     ...state,
    //     post: null,
    //   };
    default:
      return state;
  }
};

export default postsReducer;
