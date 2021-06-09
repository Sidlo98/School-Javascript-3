const actiontypes = () => {
  return {
    counter: {
      increment: "INCREMENT_COUNTER",
      decrement: "DECREMENT_COUNTER",
    },
    quantity: {
      increment: "INCREMENT_QUANTITY",
      decrement: "DECREMENT_QUANTITY",
    },
  };
};

export default actiontypes;

// export const INCREMENT_COUNTER = "[counter] increment counter";
