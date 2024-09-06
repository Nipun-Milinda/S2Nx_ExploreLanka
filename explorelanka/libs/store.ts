import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app.slice";
import visaApplicationReducer from "./features/visaApplication.slice";


export const makeStore = () => {
  return configureStore({
    reducer: {
      app: appReducer,
      visaApplication: visaApplicationReducer, 
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
