import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Add from './components/Add'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav /> <br /> <br />
      <Routes>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = '/add' element = {<Add />}></Route>
      </Routes>
    </>
  )
}

export default App
