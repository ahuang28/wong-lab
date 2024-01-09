import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '../components/ui/navigation-menu';
import data from '../data/data.json';
import { useState } from 'react';

import { Menu, X } from 'lucide-react';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (name) => {
        const section = document.getElementById(name);
        console.log(section)
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="hidden lg:block absolute top-0 z-50 w-full">
                <div className="mx-[76px] my-[24px] flex w-auto flex-row justify-between rounded-2xl bg-white px-6 py-7 drop-shadow-[0_2px_rgba(217,217,217,0.7)]">
                    <div className="flex flex-row gap-x-1">
                        <img
                            src="/src/assets/brain_logo.svg"
                            alt="logo"
                            className="h-6 w-6"
                        />
                        <a href="#home">
                            <div className="text-xl font-bold">
                                Tak Pan Wong
                            </div>
                        </a>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-row gap-x-8">
                            {data.tabs.map((tab, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink href={'#' + tab.link}>
                                        <div>{tab.title}</div>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <div className='lg:hidden absolute top-0 z-50 w-full'>
                <div className="mx-[20px] my-[32px] flex w-auto flex-row justify-between rounded-2xl bg-white px-6 py-5 drop-shadow-[0_2px_rgba(217,217,217,0.7)]">
                    <div className="flex flex-row gap-x-1">
                        <img
                            src="/src/assets/brain_logo.svg"
                            alt="logo"
                            className="h-6 w-6"
                        />
                        <a href="#home">
                            <div className="text-xl font-bold">
                                Tak Pan Wong
                            </div>
                        </a>
                    </div>
                    <Menu onClick={() => setIsOpen(true)}/>
                </div>
                {
                    isOpen && (
                        <div className="absolute top-0 left-0 w-full h-screen bg-secondary bg-opacity-80">
                            <X className="absolute top-0 right-0 m-4 h-8 w-8" onClick={() => setIsOpen(false)}/>
                            <div className="flex flex-col h-full justify-center items-center">
                                { data.tabs.map((tab, index) => (
                                    <div key={index} className="text-2xl font-bold text-gray-800 my-2">
                                        <a>{tab.title}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Header;
