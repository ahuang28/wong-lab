import { useState } from 'react';
import './App.css';
import MainPage from './views/mainPage';
import MobilePage from './views/mobilePage';
import { NextUIProvider } from '@nextui-org/react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <NextUIProvider>
            <div className="hidden lg:block h-screen w-screen overflow-x-hidden bg-secondary font-open-sans">
                <MainPage />
            </div>

            <div className='lg:hidden h-screen w-screen overflow-x-hidden bg-secondary font-open-sans'>
                <MobilePage />
            </div>
        </NextUIProvider>
    );
}

export default App;
