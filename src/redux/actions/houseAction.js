import { SET_HOUSE, SET_SELECT_HOUSE } from '../constants'

export const setHouseAction = (house) => ({
  type: SET_HOUSE,
  payload: house,
})

export const setSelectHouseAction = (selectHouse) => ({
  type: SET_SELECT_HOUSE,
  payload: selectHouse,
})
