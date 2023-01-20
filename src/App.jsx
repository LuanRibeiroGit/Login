import React from 'react'
import './App.css'
import Left from './components/contents/Left'
import Right from './components/contents/Right'

import Login from './components/login'

function App() {

  return (
    <div className="App">
      <Login>
        <Left/>
        <Right/>
      </Login>
    </div>
  )
}

export default App
