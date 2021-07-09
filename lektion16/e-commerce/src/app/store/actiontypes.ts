export enum ActionTypes {
  getProducts             = "[PRODUCTCATALOG] GET",
  getProductsSuccess      = "[PRODUCTCATALOG] GET_SUCCESS",
  getProductsFailure      = "[PRODUCTCATALOG] GET_FAILURE",

  getProduct              = "[PRODUCT] GET",
  getProductSuccess       = "[PRODUCT] GET_SUCCESS",
  getProductFailure       = "[PRODUCT] GET_FAILURE",
  clearProduct            = "[PRODUCT] CLEAR",

  addToCart               = "[SHOPPINGCART] ADD",
  removeFromCart          = "[SHOPPINGCART] REMOVE",
  increment               = "[SHOPPINGCART] INCREMENT",
  decrement               = "[SHOPPINGCART] DECREMENT",
  clear                   = "[SHOPPINGCART] CLEAR",
  total                   = "[SHOPPINGCART] TOTAL",
  amount                  = "[SHOPPINGCART] AMOUNT",
}