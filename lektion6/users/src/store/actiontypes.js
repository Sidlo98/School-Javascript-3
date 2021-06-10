const actiontypes = () => {
  return {
    auth: {
      loading: 'AUTH_LOADING',
      success: 'AUTH_SUCCESS',
      failure: 'AUTH_FAILURE',
      logout:  'AUTH_LOGOUT'
    },
    users: {
      getUsers: 'USERS_GET',
      loading:  'USERS_LOADING',
      success:  'USERS_SUCCESS',
      failure:  'USERS_FAILURE'
    }
  }
}

export default actiontypes;