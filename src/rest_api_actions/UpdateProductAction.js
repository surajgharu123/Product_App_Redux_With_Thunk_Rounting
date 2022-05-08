

import axios from "axios"

// const getAllProducts = () => {
//     // return async function(dispatch) {
//     //     let serversideData = await axios.get("http://localhost:9001/product");
//     //     dispatch({
//     //         type : "GET_ALL-PRODUCTS",
//     //         payload : serversideData.data
//     //     })
//     // }

//     return async function(disptach) {

//         let serverResponse = await axios.get('http://localhost:9001/product'); //Blocking call

//         disptach({

//             type: 'GET_ALL_PRODUCTS',

//             payload: serverResponse.data

//         });

//     }
// }


// export default getAllProducts;



const UpdateProductAction = (updatedProduct, newProductID)=> {

    return async function(disptach) {

        let serverResponse = await axios.put(`http://localhost:9001/product/${newProductID}`, 
        updatedProduct, 
        {
            'Content-type': 'application/json; charset=UTF-8',

            'Access-Control-Allow-Origin': '*'
        }); //Blocking call

        disptach({

            type: 'UPDATE_PRODUCT',

            payload: { product: serverResponse.data, productID : newProductID}

        });

    }

}


export default UpdateProductAction;