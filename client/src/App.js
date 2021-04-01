import './App.css'
import React, { Fragment } from 'react'
import Index from './components/Index'
// import TestAxios from './components/TestAxios'

//redux
import { Provider } from 'react-redux'
import store from './Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        {/* <TestAxios /> */}
        <Index />
      </Fragment>
    </Provider>
  )
}
export default App
