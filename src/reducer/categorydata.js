var initialState = [];
const CategoryData = (state = initialState, action) => {
  if (action.type == "ReadCategory") {
    return action.payload;
  } else {
    return state;
  }
};
export default CategoryData;
