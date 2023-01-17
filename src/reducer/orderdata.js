var initialState = [];
const OrderData = (state = initialState, action) => {
    if(action.type=="ReadOrder") {
            
             return action.payload;
    }else{
            return state;
    }
}
export default OrderData;