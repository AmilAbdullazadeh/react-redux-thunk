export const petIncrement = (number) => {
  return {
    type: "PET_INCREASED",
    payload: number,
  };
};

export const petDecrement = () => {
  return {
    type: "PET_DECREASED",
  };
};

const getUsersRequest = () => {
  return {
    type: "GET_USERS_REQUEST",
  };
};

const getUsersSuccess = (users) => {
  return {
    type: "GET_USERS_SUCCESS",
    payload: users,
  };
};

const getUsersFailure = (error) => {
  return {
    type: "GET_USERS_FAILURE",
    payload: error,
  };
};

const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const users = data;
        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getUsersFailure(errorMessage));
      });
  };
};
