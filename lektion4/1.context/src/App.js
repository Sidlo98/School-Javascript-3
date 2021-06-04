import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Posts from "./views/Posts";
import CreatePost from "./views/CreatePost";
import PostsContextProvider from "./contexts/PostsContext";
import "./App.css";

function App() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Router>
      <Navbar title="My Blog" />
      <div className="bg" style={{ background: theme.bg }}>
        <div className="container">
          <PostsContextProvider>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/create" component={CreatePost} />
            </Switch>
          </PostsContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
