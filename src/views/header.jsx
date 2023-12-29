import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "../components/ui/navigation-menu"

  import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
  import { Link } from "@nextui-org/react";
   

function Header() {
    const tabs = [{text:"About", width:46, id:1}, {text:"Projects", width:60, id:2}, {text:"Team", width:42, id:3}, {text:"Publications", width:91, id:4}, {text:"News", width:42, id:5}, {text:"Contact", width:58, id:6}]

    return(
        <>
            {/* <div className="w-auto bg-white rounded-2xl my-[24px] mx-[73px] px-6 flex flex-row justify-between py-7 drop-shadow-[0_2px_rgba(217,217,217,0.7)]">
                <div className="flex flex-row gap-x-1">
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-6 h-6" />
                    <div className="text-xl font-bold">
                        Tak Pan Wong
                    </div>
                </div>
                <nav className="w-3/6 grid gap-3 text-center grid-cols-6 px-3">
                    {tabs.map((tab) => (
                        <span key={tab.id}>
                            <a className="hover:font-bold" href="">
                                {tab.text}
                            </a>
                        </span>
                    ))}
                </nav>
            </div> */}
            
            {/* <div className="w-auto bg-white rounded-2xl my-[24px] mx-[73px] px-6 flex flex-row justify-between py-7 drop-shadow-[0_2px_rgba(217,217,217,0.7)]">
        <div className="flex flex-row gap-x-1">
            <img src="https://via.placeholder.com/150" alt="logo" className="w-6 h-6" />
            <div className="text-xl font-bold">
                Tak Pan Wong
            </div>
        </div>
        <div>
            {tabs.map((tab) => (
                <span key={tab.id} className={`inline-block text-center w-[100px] transition duration-700`}>
                    <span className="hover:font-bold">
                        {tab.text}
                    </span>
                </span>
            ))}
        </div>
    </div> */}
            <div className="top-0 absolute w-full">
                <div className="w-auto bg-white rounded-2xl my-[24px] mx-[73px] px-6 flex flex-row justify-between py-7 drop-shadow-[0_2px_rgba(217,217,217,0.7)]">
                    <div className="flex flex-row gap-x-1">
                        <img src="https://via.placeholder.com/150" alt="logo" className="w-6 h-6" />
                        <a href="#mainpage">
                            <div className="text-xl font-bold">
                                Tak Pan Wong
                            </div>
                        </a>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-row gap-x-8">
                            {tabs.map((tab) => (
                                <NavigationMenuItem key={tab.id}>
                                    <NavigationMenuLink href={'#' + tab.text}>
                                        <div>
                                            {tab.text}
                                        </div>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

            {/* <Navbar>
                <NavbarBrand>
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-6 h-6" />
                    <div className="text-xl font-bold">
                        Tak Pan Wong
                    </div>
                </NavbarBrand>
                <NavbarContent>
                    {tabs.map((tab) => (
                        <NavbarItem key={tab.id}>
                            <Link className="hover:to-black" href="#">
                                {tab.text}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </Navbar> */}

            {/* <div className="flex flex-row">
                    <Link to="/home/leads" className="flex flex-row items-center pb-1">
                        <img src="/src/assets/ensemble-logo.svg" className="h-5 w-5 mr-2" />
                        <Label className="text-xl">Ensemble</Label>
                    </Link>
                    <NavigationMenu className="ml-4">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link to="./leads" className={navigationMenuTriggerStyle()}>
                                    Leads
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="./pipelines" className={navigationMenuTriggerStyle()}>
                                    Pipelines
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="./organizations/edit" className={navigationMenuTriggerStyle()}>
                                    Organizations
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div> */}
            
        </>

    )
}

export default Header