import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/quantityActions";
import * as counter from "../store/actions/counterActions";

const Quantity = () => {
  const quantity = useSelector((state) => state.quantity);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Quantity</h3>
      <p>Quantity is = {quantity}</p>
      <button onClick={() => dispatch(increment(1))}>1</button>
      <button onClick={() => dispatch(increment(10))}>10</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
      <br />
      <button onClick={() => dispatch(counter.increment())}>
        increment Counter
      </button>
      <button onClick={() => dispatch(counter.decrement())}>
        decrement Counter
      </button>
    </div>
  );
};

export default Quantity;
