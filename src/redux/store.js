import { createStore, combineReducers } from 'redux'
import { streetReducer } from './reducers/streetReducer'
import { houseReducer } from './reducers/houseReducer'
import { apartametReducer } from './reducers/apartametReducer'
import { clientReducer } from './reducers/clientReducer'

const rootReducer = combineReducers({
  street: streetReducer,
  house: houseReducer,
  apartament: apartametReducer,
  client: clientReducer
})

export const store = createStore(rootReducer)
