import { useRef, useEffect } from "react";

const Product = ({ product, editProductCallback }) => {
  const id = useRef();
  const name = useRef();

  useEffect(() => {
    id.current.value = product.id;
    name.current.value = product.name;
  }, [product.id, product.name]);

  const onSub = (e) => {
    e.preventDefault();

    editProductCallback({
      id: id.current.value,
      name: name.current.value,
    });
  };
  return (
    <form onSubmit={onSub}>
      <input type="text" disabled ref={id} />
      <input type="text" ref={name} />
      <button>Spara</button>
    </form>
  );
};

export default Product;
