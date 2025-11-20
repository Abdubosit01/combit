import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Abaut from './component/Abaut'
import Content from './component/Content'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <header>
   <Link to ='/'>Home</Link>
   <Link to='/about'>About</Link>
   <Link to ='/content'>Content</Link>
   


   </header>

   <Routes>
    <Route path='/' element={<Home/>}>HOME</Route>
    <Route path='/about' element={<Abaut/>}>About</Route>
    <Route path='/content' element={<Content/>}>Content</Route>

   </Routes>
     

    
    </>
  )
}

export default App
