function Header() {
    const tabs = [{text:"About", width:46, id:1}, {text:"Projects", width:60, id:2}, {text:"Team", width:42, id:3}, {text:"Publications", width:91, id:4}, {text:"News", width:42, id:5}, {text:"Contact", width:58, id:6}]

    return(
        <>
            <div className="w-auto bg-white rounded-2xl my-[24px] mx-[73px] px-6 flex flex-row justify-between py-7 drop-shadow-[0_2px_rgba(217,217,217,0.7)]">
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
    </div>
        </>

    )
}

export default Header