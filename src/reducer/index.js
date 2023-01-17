import formData from "./formdata";
import OrderData from "./orderdata";
import CategoryData from "./categorydata";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formData,
  OrderData,
  CategoryData,
});
export default rootReducer;
