import { SET_CLIENT_ID } from '../constants'

export const setClientIdAction = (clientId) => ({
  type: SET_CLIENT_ID,
  payload: clientId,
})

