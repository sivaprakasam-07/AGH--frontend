import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Questioncategory from './components/Questioncategory'
import Searchbar from './components/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Questioncategory />
      <Searchbar/>
    </>
  )
}

export default App
