import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/counterActions";
// import * as actions from "../store/actions/counterActions";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter</h3>
      <p>Counter is = {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
