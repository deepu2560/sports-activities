import axios from "axios";

export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const dataLoading = () => ({ type: DATA_LOADING });
export const dataSuccess = (payload) => ({ type: DATA_SUCCESS, payload });
export const dataError = () => ({ type: DATA_ERROR });

export const fetchSportData = (dispatch, query, display) => {
  return function () {
    dispatch(dataLoading());
    axios
      .get(`https://sport-deepu2560.herokuapp.com/${query}?title=${display}`)
      .then((res) => {
        const { data } = res.data[0];
        setTimeout(() => {
          dispatch(dataSuccess(data));
        }, 500);
      })
      .catch((err) => {
        dispatch(dataError());
        console.log(err);
      });
  };
};
