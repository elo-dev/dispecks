import {
  SET_HOUSE,
  SET_SELECT_HOUSE_ID,
  SET_SELECT_HOUSE_NAME,
} from '../constants'

const initialState = {
  house: [],
  selectHouseId: '',
  houseNum: '',
}

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSE:
      return { ...state, house: action.payload }
    case SET_SELECT_HOUSE_ID:
      return { ...state, selectHouseId: action.payload }
    case SET_SELECT_HOUSE_NAME:
      return { ...state, houseNum: action.payload }
    default:
      return state
  }
}
