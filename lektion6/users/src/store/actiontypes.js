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
    },
    user: {
      getUser:  'USER_GET',
      loading:  'USER_LOADING',
      success:  'USER_SUCCESS',
      failure:  'USER_FAILURE',
      update:   'USER_UPDATE',
      delete:   'USER_DELETE'
    }
  }
}

export default actiontypes;