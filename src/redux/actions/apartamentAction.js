import { SET_APARTAMENT, SET_SELECT_APARTAMENT } from '../constants'

export const setApartamentAction = (apartaments) => ({
  type: SET_APARTAMENT,
  payload: apartaments,
})

export const setSelectApartamentAction = (selectApartaments) => ({
  type: SET_SELECT_APARTAMENT,
  payload: selectApartaments,
})
