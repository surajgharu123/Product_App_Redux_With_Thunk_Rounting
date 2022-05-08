let initialState = {}
initialState.products = [{ id: 1, name: "Laptop", price: 50000, quantity: 25 }]
initialState.selectedProduct = {}
initialState.renderForm = 'ADD_PRODUCT'

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            state.products = action.payload;
            return { ...state }
        case 'ADD_PRODUCT':
            //state.products.push(action.payload);
            state.products.push(action.payload);
            state.products = [...state.products]
            return { ...state };
        case 'EDIT_PRODUCT':
            state.selectedProduct = action.payload;
           // state.renderForm = 'EDIT_PRODUCT';
            return { ...state };
        case 'DELETE_PRODUCT':
            let productsList = state.products;
            let updatedProducts = productsList.filter(product => product.id !== action.payload)
            state.products = [...updatedProducts]
            return { ...state };
        
        case 'UPDATE_PRODUCT':
            {
                let productsList = state.products;
                let updatedProducts = [];
                productsList.forEach(product => {
                    if(product.id === action.payload.productID){
                        updatedProducts.push(action.payload.product);
                    }
                    else{
                        updatedProducts.push(product);
                    }
                })
                //state.renderForm = action.payload.renderForm;
                state.products = [...updatedProducts];
                return { ...state };
            }
        default:
            return state;
    }
}

export default productReducer;


// const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'GET_ALL_PRODUCTS':
//             state.products = action.payload;
//             return { ...state }
//         case 'ADD_PRODUCT':
//             //state.products.push(action.payload);
//             state.products.push(action.payload);
//             state.products = [...state.products]
//             return { ...state };
//         case 'EDIT_PRODUCT':
//             state.selectedProduct = action.payload;
//             state.renderForm = 'EDIT_PRODUCT';
//             return { ...state };
//         case 'DELETE_PRODUCT':
//             let productsList = state.products;
//             let updatedProducts = productsList.filter(product => product.id !== action.payload)
//             state.products = [...updatedProducts]
//             return { ...state };
//         case 'CANCEL_EDIT':
//             state.renderForm = action.payload;
//             return { ...state };
//         case 'UPDATE_PRODUCT':
//             {
//                 let productsList = state.products;
//                 let updatedProducts = [];
//                 productsList.forEach(product => {
//                     if(product.id === action.payload.productID){
//                         updatedProducts.push(action.payload.product);
//                     }
//                     else{
//                         updatedProducts.push(product);
//                     }
//                 })
//                 state.renderForm = action.payload.renderForm;
//                 state.products = [...updatedProducts];
//                 return { ...state };
//             }
//         default:
//             return state;
//     }
// }

// export default productReducer;
