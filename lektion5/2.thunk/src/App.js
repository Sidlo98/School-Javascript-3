import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./views/News";
import Login from "./views/Login";
import PostDetails from "./views/PostDetails";
import Create from "./views/Create";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/posts/:id" component={PostDetails} />
          <ProtectedRoute exact path="/create" component={Create} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
