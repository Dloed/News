import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./Slicers/SlicersNews";


export const store = configureStore({
  reducer: {
    news: newsReducer,
    

    
  },
});
export default store;
