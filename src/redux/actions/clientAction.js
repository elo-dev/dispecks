import { SET_CLIENT_ID, SET_CLIENT_PHONE_NUM, SET_CLIENTS } from '../constants'

export const setClientIdAction = (clientId) => ({
  type: SET_CLIENT_ID,
  payload: clientId,
})

export const setClientPhoneNumAction = (clientPhoneNum) => ({
  type: SET_CLIENT_PHONE_NUM,
  payload: clientPhoneNum,
})

export const setClientsAction = (clients) => ({
  type: SET_CLIENTS,
  payload: clients,
})
