import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";

import Home from "./views/Home";
import Products from "./views/Products";
import ProductDetails from "./views/ProductDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
