function Header() {
    return(
    <div className="w-auto bg-white rounded-2xl my-[24px] mx-[73px] px-6 flex flex-row justify-between py-7 drop-shadow-[0_2px_rgba(217,217,217,0.7)]">
        <div className="flex flex-row gap-x-1">
            <img src="https://via.placeholder.com/150" alt="logo" className="w-6 h-6" />
            <div className="text-xl font-bold">
                Tak Pan Wong
            </div>
        </div>
        <div className="flex flex-row gap-x-6">
            <div>
                About
            </div>
            <div>
                Projects
            </div>
            <div>
                Team
            </div>
            <div>
                Publications
            </div>
            <div>
                News
            </div>
            <div>
                Contact
            </div>
        </div>
    </div>
    )
}

export default Header