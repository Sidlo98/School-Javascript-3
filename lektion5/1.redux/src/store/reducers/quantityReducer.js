import actiontypes from "../actiontypes";

const initState = 0;

const quantityReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().quantity.increment:
      return state + action.payload;
    case actiontypes().quantity.decrement:
      return state - action.payload;
    default:
      return state;
  }
};

export default quantityReducer;
