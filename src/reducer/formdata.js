const initialState = {};

const formData = (state = initialState, action) => {
    if(action.type=="LOGIN") {
            
             return [...state, action.payload];
    }else{
            return state;
    }
}
export default formData;