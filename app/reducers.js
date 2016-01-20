import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const initialAuth = {
  user: null,
  credentials: null,
  gettingUser: false,
  signingIn: false,
}

function auth(state = initialAuth, action) {
  switch (action.type) {
    case 'AUTH_GET_USER_REQUEST':
      return {
        ...state, 
        user: action.user,
        gettingUser: true,
      }
    case 'AUTH_GET_USER_SUCCESS':
      return {
        ...state, 
        user: action.user,
        gettingUser: false,
      }
    case 'AUTH_GET_USER_FAILURE':
      return {
        ...state, 
        gettingUser: false,
      }
    case 'AUTH_RESET_USER_SUCCESS':
      return {
        ...state, 
        user: null,
      }
    case 'AUTH_SIGN_IN_REQUEST':
      return {
        ...state, 
        user: {
          ...user, 
          ...action.user,
        },
        signingIn: true,
      }
    case 'AUTH_SIGN_IN_SUCCESS':
      const { user } = state
      return {
        ...state, 
        user: {
          ...user, 
          ...action.user,
        },
        credentials: action.credentials,
        signingIn: false,
        error: null,
      }
    case 'AUTH_SIGN_IN_FAILURE':
      return {
        ...state, 
        signingIn: false,
        error: action.error,
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  auth,
  form
})

export default reducer
