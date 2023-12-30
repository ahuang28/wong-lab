import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './views/header'
import MainPage from './views/mainPage'
import {NextUIProvider} from "@nextui-org/react";


function App() {
  const [count, setCount] = useState(0)

  return (
    <NextUIProvider>
      <div className='bg-[#F8F3ED] w-screen h-screen overflow-x-hidden font-open-sans'>
        <MainPage />
      </div>
    </NextUIProvider>
  )
}

export default App
