import { configureStore } from '@reduxjs/toolkit';
import  UserReducer  from './reducers/UserReducers';
import ProductReducer from "./reducers/ProductReducer"

export default configureStore({
  reducer: {
    // frist wala  UserReducer sirf key name hai ye batayega ki userReduce structured kase hai 
   UserReducer:UserReducer,
// second UserReducer is the reducer function, recive state, recives action , return new state
    ProductReducer: ProductReducer,
  },
})