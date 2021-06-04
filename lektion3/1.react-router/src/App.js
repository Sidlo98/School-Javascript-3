import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Shop from "./views/Shop";
import ProductDetails from "./views/ProductDetails";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ProductDetails} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
