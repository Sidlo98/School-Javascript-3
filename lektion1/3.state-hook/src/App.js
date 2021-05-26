import "./App.css";
import { useState } from "react";
import Post from "./components/post/Post";

function App() {
  // let counter = 0;

  const [counter, setCounter] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts] = useState([
    {
      id: "1",
      title: "Post 1",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum deserunt, rem velit veniam excepturi suscipit architecto amet! Laboriosam minima temporibus vero nihil maiores fuga distinctio a debitis cum. Aut.",
    },
    {
      id: "2",
      title: "Post 2",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum deserunt, rem velit veniam excepturi suscipit architecto amet! Laboriosam minima temporibus vero nihil maiores fuga distinctio a debitis cum. Aut.",
    },
    {
      id: "3",
      title: "Post 3",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ipsum deserunt, rem velit veniam excepturi suscipit architecto amet! Laboriosam minima temporibus vero nihil maiores fuga distinctio a debitis cum. Aut.",
    },
  ]);

  const increment = () => {
    // counter++;
    setCounter(counter + 1);
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  const decrement = () => {
    // counter--;
    setCounter(counter - 1);
    setCounter((prev) => prev - 1);
    console.log(counter);
  };

  const login = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1 className="text-center mb-2">Posts</h1>
      ) : (
        <h1 className="text-center mb-2">Please login!</h1>
      )}

      <div className="container">
        {/* 
        {posts.map((post) => (
          <Post title={post.title} body={post.body} key={post.id} />
        ))} */}

        {/* {posts.map((post) => {
          if (isLoggedIn) {
            return <Post title={post.title} body={post.body} key={post.id} />;
          }
        })} */}
        
        {/* {
          posts.map((post) => (
            isLoggedIn ?  <Post title={post.title} body={post.body} key={post.id} /> : ''
          ))
        } */}

        {
          isLoggedIn && posts.map((post) => <Post title={post.title} body={post.body} key={post.id} />)
        }


      </div>

      <button onClick={login}>{isLoggedIn ? "Logout" : "Login"}</button>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
