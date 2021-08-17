const initialState = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return { ...state, loading: true };
    case "GET_USERS_SUCCESS":
      return { loading: false, users: action.payload };
    case "GET_USERS_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default users;
