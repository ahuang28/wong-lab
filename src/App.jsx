import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './views/header'
import MainPage from './views/mainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#F8F3ED] w-screen h-screen overflow-auto font-open-sans'>
        <Header />
        <MainPage />
      </div>
    </>
  )
}

export default App
