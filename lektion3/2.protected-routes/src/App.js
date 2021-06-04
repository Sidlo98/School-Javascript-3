import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Admin from "./views/Admin";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar title="Protected Routes" />

      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/admin" exact component={Admin} /> */}

          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
