import React from 'react'
import './App.css'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './redux/store'
import Number from './components/Number'
import Users from './components/Users'


const App = () => {
  return (
    <Provider store={store}>
       <div>
        <Counter/>
        <Number/>
        <Users/>
       </div>
    </Provider>
   
  )
}

export default App