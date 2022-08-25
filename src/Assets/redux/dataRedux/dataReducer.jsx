import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./dataAction";

const initialStore = {
  isLoading: false,
  isData: false,
  data: [],
  isFailure: false,
};

export const DataReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isData: true,
        data: payload,
        isFailure: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isData: false,
        data: [],
        isFailure: true,
      };
    default:
      return state;
  }
};
