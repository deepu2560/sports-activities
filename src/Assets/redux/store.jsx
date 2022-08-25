import { createStore } from "redux";
import { DataReducer } from "./dataRedux/dataReducer";

export const store = createStore(
  DataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
