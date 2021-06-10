import actiontypes from "../actiontypes";

export const login = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(_login);
    }, 1000);
  };
};

export const _login = () => {
  return {
    type: actiontypes().auth.login,
    payload: true,
  };
};

export const logout = () => {
  return {
    type: actiontypes().auth.logout,
    payload: false,
  };
};
