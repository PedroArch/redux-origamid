import getLocalStorage from "./helper/getLocalStorage.js";

// constants
const TOKEN_FETCH_STARTED = "token/FETCH_STARTED";
const TOKEN_FETCH_SUCCESS = "token/FETCH_SUCCESS";
const TOKEN_FETCH_ERROR = "token/FETCH_ERROR";

// action creators
export const tokenFetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
export const tokenFetchSuccess = (token) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload: token,
  localStorage: "token",
});
export const tokenFetchError = (error) => ({
  type: TOKEN_FETCH_ERROR,
  payload: error,
});

// async actions
export const tokenFetch = (body) => async (dispatch) => {
  try {
    dispatch(tokenFetchStarted());
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const { token } = await response.json();
    dispatch(tokenFetchSuccess(token));
  } catch (error) {
    dispatch(tokenFetchError(error.message));
  }
};

// initial-state
const initialState = {
  loading: false,
  data: getLocalStorage("token", null),
  error: null,
};

// reducer
function token(state = initialState, action) {
  switch (action.type) {
    case TOKEN_FETCH_STARTED:
      return { ...state, loading: true };
    case TOKEN_FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case TOKEN_FETCH_ERROR:
      return { loading: false, data: null, error: action.payload };
    default:
      return state
  }
}

export default token;
