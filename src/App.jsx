import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import components
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="AppHeader flex items-center justify-center">
        <Header/>
      </div>
    </div>
  )
}

export default App
