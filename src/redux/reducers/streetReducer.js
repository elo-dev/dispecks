import { SET_STREET, SET_SELECT_STREET } from '../constants'

const initialState = {
  street: [],
  selectStreet: null,
}

export const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREET:
      return { ...state, street: action.payload }
    case SET_SELECT_STREET:
      return { ...state, selectStreet: action.payload }
    default:
      return state
  }
}
