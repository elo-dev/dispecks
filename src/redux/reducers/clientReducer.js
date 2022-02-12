import { SET_CLIENT_ID } from '../constants'

const initialState = {
  clientId: null,
}

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENT_ID:
      return { ...state, clientId: action.payload }
    default:
      return state
  }
}
