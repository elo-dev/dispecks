import { SET_HOUSE, SET_SELECT_HOUSE_ID, SET_SELECT_HOUSE_NAME } from '../constants'

export const setHouseAction = (house) => ({
  type: SET_HOUSE,
  payload: house,
})

export const setSelectHouseIdAction = (selectHouseId) => ({
  type: SET_SELECT_HOUSE_ID,
  payload: selectHouseId,
})

export const setSelectHouseNumAction = (selectHouseNum) => ({
  type: SET_SELECT_HOUSE_NAME,
  payload: selectHouseNum,
})
