import React from 'react'
import './App.css'
import AddClient from './view/AddClient'
import Address from './view/Address'
import DeleteClient from './view/DeleteClient'

function App() {
  return (
    <div className="App">
      <Address />
      <div className='container'>
        <AddClient />
        <DeleteClient />
      </div>
    </div>
  )
}

export default App
