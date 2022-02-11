import { createStore, combineReducers } from 'redux'
import { streetReducer } from './reducers/streetReducer'
import { houseReducer } from './reducers/houseReducer'
import { apartametReducer } from './reducers/apartametReducer'

const rootReducer = combineReducers({
  street: streetReducer,
  house: houseReducer,
  apartament: apartametReducer,
})

export const store = createStore(rootReducer)
