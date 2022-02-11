import { SET_APARTAMENT, SET_SELECT_APARTAMENT } from '../constants'

const initialState = {
  apartaments: [],
  selectApartament: '',
}

export const apartametReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APARTAMENT:
      return { ...state, apartaments: action.payload }
    case SET_SELECT_APARTAMENT:
      return { ...state, selectApartament: action.payload }
    default:
      return state
  }
}
