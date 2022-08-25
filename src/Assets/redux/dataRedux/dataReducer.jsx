import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./dataAction";

const initialStore = {
  isLoading: false,
  isData: false,
  data: [],
  isFailure: false,
};

export const DataReducer = (state = initialStore, type, payload) => {
  switch (type) {
    case DATA_LOADING:
      return {
        isLoading: true,
        ...state,
      };
    case DATA_SUCCESS:
      return {
        isLoading: false,
        isData: true,
        data: payload,
        isFailure: false,
        ...state,
      };
    case DATA_ERROR:
      return {
        isLoading: false,
        isData: false,
        data: [],
        isFailure: true,
        ...state,
      };
    default:
      return state;
  }
};
