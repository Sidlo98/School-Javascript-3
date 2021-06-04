import { useState, useEffect } from "react";
import axios from "axios";
import ProductListItem from "../components/ProductListItem";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const _products = res.data;
    console.log(_products);
    setProducts(_products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
