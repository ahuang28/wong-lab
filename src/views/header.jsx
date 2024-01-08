import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '../components/ui/navigation-menu';
import data from '../data/data.json';
import { Menu } from 'lucide-react';

function Header() {
    const tabs = [
        { text: 'About', width: 46, id: 1 },
        { text: 'Projects', width: 60, id: 2 },
        { text: 'Team', width: 42, id: 3 },
        { text: 'Publications', width: 91, id: 4 },
        { text: 'News', width: 42, id: 5 },
        { text: 'Contact', width: 58, id: 6 },
    ];

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
                            {data.tabs.map((tab) => (
                                <NavigationMenuItem key={tab.id}>
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
                    <Menu />
                </div>

            </div>
        </>
    );
}

export default Header;
