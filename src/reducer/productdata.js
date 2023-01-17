var initialState = [];
const ProductData = (state = initialState, action) => {
  if (action.type == "ReadProduct") {
    return action.payload;
  } else {
    return state;
  }
};
export default ProductData;
