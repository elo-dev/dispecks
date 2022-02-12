import { SET_STREET, SET_SELECT_STREET_ID, SET_SELECT_STREET_NAME } from '../constants'

export const setStreetAction = (street) => ({
  type: SET_STREET,
  payload: street,
})

export const setSelectStreetIdAction = (selectStreetId) => ({
  type: SET_SELECT_STREET_ID,
  payload: selectStreetId,
})

export const setSelectStreetNameAction = (selectStreetName) => ({
  type: SET_SELECT_STREET_NAME,
  payload: selectStreetName,
})
