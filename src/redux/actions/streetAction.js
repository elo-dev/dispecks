import { SET_STREET, SET_SELECT_STREET } from '../constants'

export const setStreetAction = (street) => ({
  type: SET_STREET,
  payload: street,
})

export const setSelectStreetAction = (selectStreet) => ({
  type: SET_SELECT_STREET,
  payload: selectStreet,
})
