import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import Advanced from './examples/Advanced'
import Simple from './examples/Simple'
import AccountMenu from './components/menu/menu'

function App () {

  return (
    <div className='app'>
      <AccountMenu style={{width: "100vw"}}/>
      <Simple />
    </div>
  )
}

export default App
