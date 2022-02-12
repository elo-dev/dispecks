import { SET_APARTAMENT, SET_SELECT_APARTAMENT_ID, SET_SELECT_APARTAMENT_NUM } from '../constants'

export const setApartamentAction = (apartaments) => ({
  type: SET_APARTAMENT,
  payload: apartaments,
})

export const setSelectApartamentIdAction = (selectApartamentsId) => ({
  type: SET_SELECT_APARTAMENT_ID,
  payload: selectApartamentsId,
})

export const setApartamentNumAction = (selectApartamentsNum) => ({
  type: SET_SELECT_APARTAMENT_NUM,
  payload: selectApartamentsNum,
})
