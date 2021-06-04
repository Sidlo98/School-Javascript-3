import React, { Component } from "react";
import "./App.css";

import AddProductForm from "./components/AddProductForm";
import Product from "./components/Product";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: Date.now().toString(),
          name: "Product 1",
          desc: "productdescription",
        },
      ],
    };
  }

  componentDidMount() {
    const storedProduct = JSON.parse(localStorage.getItem("products"));
    if (storedProduct) {
      this.setState({ products: storedProduct });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  addProductCallback = (product) => {
    // this.setState((prev) => {
    //   console.log(prev);
    //   return { products: [...prev.products, product] };
    // });
    this.setState({ products: [...this.state.products, product] });
  };

  editProductCallback = (product) => {
    this.setState((prev) => {
      let newProducts = prev.products.map((p) => {
        if (p.id === product.id) {
          return (p = product);
        }
        return p;
      });
      return { products: newProducts };
    });
  };

  render() {
    return (
      <div>
        <AddProductForm addProductCallback={this.addProductCallback} />
        <br />
        <br />
        {this.state.products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              editProductCallback={this.editProductCallback}
            />
          );
        })}
      </div>
    );
  }
}
