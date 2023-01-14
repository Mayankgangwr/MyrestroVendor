import formData from './formdata';
import OrderData from './orderdata';
import {combineReducers } from "redux";

const rootReducer = combineReducers({
    formData,
    OrderData
});
export default rootReducer;