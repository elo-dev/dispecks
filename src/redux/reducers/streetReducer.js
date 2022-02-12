import {
  SET_STREET,
  SET_SELECT_STREET_ID,
  SET_SELECT_STREET_NAME,
} from '../constants'

const initialState = {
  street: [],
  selectStreetId: null,
  streetName: ''
}

export const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREET:
      return { ...state, street: action.payload }
    case SET_SELECT_STREET_ID:
      return { ...state, selectStreetId: action.payload }
    case SET_SELECT_STREET_NAME:
      return { ...state, streetName: action.payload }
    default:
      return state
  }
}
