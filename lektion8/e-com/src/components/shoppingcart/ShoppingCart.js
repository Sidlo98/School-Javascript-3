import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector((state) => state.cartReducer.totalCartAmount)

  const empty = (
    <div className="p-2 d-flex justify-content-between align-items-center">
      Your cart is empty
    </div>
  );

  return (
    <div>
      {shoppingCart.map((product) => (
        <CartProduct product={product} key={product._id} />
      ))}
      <div className="dropdown-divider"></div>

      {!shoppingCart.length && empty}

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          Total Amount: <span>{totalCartAmount}</span>
        </div>
        <small className="text-muted">inkl. vat</small>
        <button className="btn btn-info">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
