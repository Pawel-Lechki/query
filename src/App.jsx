import { useState } from 'react'
import ButtonAppBar from './components/ButtonAppBar'

function App() {

  return (
    <>
      <ButtonAppBar />
      <h1>TenStack Query</h1>
    </>
  )
}

function wait(duration){
  return new Promise(resolve => setTimeoutres(resolve, duration))
}

export default App
