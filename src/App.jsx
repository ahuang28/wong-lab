import { useState } from 'react';
import './App.css';
import MainPage from './views/mainPage';
import { NextUIProvider } from '@nextui-org/react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <NextUIProvider>
            <div className="h-screen w-screen overflow-x-hidden bg-[#F8F3ED] font-open-sans">
                <MainPage />
            </div>
        </NextUIProvider>
    );
}

export default App;
