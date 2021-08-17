import React, { useEffect } from "react";
import "./App.css";
import { petIncrement, petDecrement, fetchUsers } from "./actions";
import { useSelector, useDispatch, connect } from "react-redux";

function App({ userData, fetchUsers }) {
  const users = userData.users;
  const loading = userData.loading;
  const error = userData.error;

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to React Redux Thunk Crash Course</h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
