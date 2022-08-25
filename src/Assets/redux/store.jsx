import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { DataReducer } from "./dataRedux/dataReducer";

export const store = createStore(DataReducer, applyMiddleware(thunk));
