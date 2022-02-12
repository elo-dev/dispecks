import React from 'react'
import './App.css'
import AddClient from './view/AddClient'
import Address from './view/Address'
import ClientsList from './view/ClientsList'
import DeleteClient from './view/DeleteClient'

function App() {
  return (
    <div className="App">
      <Address />
      <div className='container'>
        <AddClient />
        <DeleteClient />
      </div>
      <ClientsList />
    </div>
  )
}

export default App
