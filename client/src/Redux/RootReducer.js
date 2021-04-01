import { combineReducers } from 'redux'
import TableFormReducer from './TableForm/TableFormReducer'

const RootReducer = combineReducers({
  TableFormData: TableFormReducer,
})

export default RootReducer
