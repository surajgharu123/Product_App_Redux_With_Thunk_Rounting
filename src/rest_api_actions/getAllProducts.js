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



const GetAllProductsAction = ()=> {

    return async function(disptach) {

        let serverResponse = await axios.get('http://localhost:9001/product'); //Blocking call

        disptach({

            type: 'GET_ALL_PRODUCTS',

            payload: serverResponse.data

        });

    }

}


export default GetAllProductsAction;