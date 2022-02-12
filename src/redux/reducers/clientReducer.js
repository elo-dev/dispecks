import { SET_CLIENT_ID, SET_CLIENT_PHONE_NUM, SET_CLIENTS } from '../constants'

const initialState = {
  clients: [],
  clientId: null,
  clientPhoneNum: null,
}

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENTS:
      return { ...state, clients: [...state.clients, action.payload] }
    case SET_CLIENT_ID:
      return { ...state, clientId: action.payload }
    case SET_CLIENT_PHONE_NUM:
      return { ...state, clientPhoneNum: action.payload }
    default:
      return state
  }
}
