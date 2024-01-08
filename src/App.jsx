import { useState } from 'react';
import './App.css';
import MainPage from './views/mainPage';
import { NextUIProvider } from '@nextui-org/react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <NextUIProvider>
            <div className="hidden lg:block h-screen w-screen overflow-x-hidden bg-[#F8F3ED] font-open-sans">
                <MainPage />
            </div>
            <div className='lg:hidden'>
                Hello Wrodl
            </div>
        </NextUIProvider>
    );
}

export default App;
