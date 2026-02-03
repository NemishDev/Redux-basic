
// ye file hammne async kamm karne ke liye banayi hai 
import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";

// ??hofs created because react say aap async action baana vaale hai to hof is the way
export const asyncgetproducts =() => async (dispatch, getState) =>{
  console.log(getState()); // get state apki current global state ko deta hai 
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    //here we have  data of product that is sync data
  
    

   dispatch(getproducts(response.data)); // it is an action so we need to dispatch this 
   // dispatch ka kamm get product ko call karna or usme data pass karna 


  } catch (error) {
     console.log(error);
  }
};