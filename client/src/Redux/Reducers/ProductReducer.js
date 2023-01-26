import { GETALLPRODUCTS, GETONEPRODUCT } from "../TypeActions/ProductType"

const initialState = {
    products : [],
    oneProduct:{}
}

const ProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GETONEPRODUCT : return {...state,oneProduct : action.payload}
        case GETALLPRODUCTS : return {...state,products : action.payload}
        default: return state
    }
}

export default ProductReducer