export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const dataLoading = () => ({ type: DATA_LOADING });
export const dataSuccess = (payload) => ({ type: DATA_SUCCESS, payload });
export const dataError = () => ({ type: DATA_ERROR });
