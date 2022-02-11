import { SET_HOUSE, SET_SELECT_HOUSE } from '../constants'

const initialState = {
  house: [],
  selectHouse: '',
}

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSE:
      return { ...state, house: action.payload }
    case SET_SELECT_HOUSE:
      return { ...state, selectHouse: action.payload }
    default:
      return state
  }
}
