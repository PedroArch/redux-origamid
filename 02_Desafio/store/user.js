// constants
const USER_FETCH_STARTED = "user/FETCH_STARTED";
const USER_FETCH_SUCCESS = "user/FETCH_SUCCESS";
const USER_FETCH_ERROR = "user/FETCH_ERROR";

// action creators
export const userFetchStarted = () => ({ type: USER_FETCH_STARTED });
export const userFetchSuccess = (user) => ({
  type: USER_FETCH_SUCCESS,
  payload: user,
});
export const userFetchError = (error) => ({
  type: USER_FETCH_ERROR,
  payload: error,
});

// async actions
export const userFetch = (token) => async (dispatch) => {
  try {
    dispatch(userFetchStarted());
    const response = await fetch("https://dogsapi.origamid.dev/json/api/user", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const user = await response.json();
    dispatch(userFetchSuccess(user));
  } catch (error) {
    dispatch(userFetchError(error.message));
  }
};

// initial-state
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// reducer
function user(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_STARTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case USER_FETCH_ERROR:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

export default user;
