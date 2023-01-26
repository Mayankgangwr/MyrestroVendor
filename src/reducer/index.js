import formData from "./formdata";
import OrderData from "./orderdata";
import CategoryData from "./categorydata";
import ProductData from "./productdata";
import Notification from "./notification";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formData,
  OrderData,
  CategoryData,
  ProductData,
  Notification,
});
export default rootReducer;
