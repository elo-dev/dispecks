import {
  SET_APARTAMENT,
  SET_SELECT_APARTAMENT_ID,
  SET_SELECT_APARTAMENT_NUM,
} from '../constants'

const initialState = {
  apartaments: [],
  selectApartamentId: '',
  apartamentNum: '',
}

export const apartametReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APARTAMENT:
      return { ...state, apartaments: action.payload }
    case SET_SELECT_APARTAMENT_ID:
      return { ...state, selectApartamentId: action.payload }
    case SET_SELECT_APARTAMENT_NUM:
      return { ...state, apartamentNum: action.payload }
    default:
      return state
  }
}
