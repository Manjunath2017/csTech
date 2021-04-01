import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './RootReducer'
// import TableReducer from './TableForm/TableFormReducer'

const Store = createStore(
  rootReducer,
  // TableReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default Store
