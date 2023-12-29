import Header from "./header"

function MainPage() {
    return (
        <>
            <Header />
            <div className="h-[54rem] bg-red-200" id="mainpage">
                <div className="text-2xl">Welcome to the</div>
                <div className="text-8xl font-bold text-primary">WONG LAB</div>
            </div>
            <div className="h-[29rem] bg-orange-200" id="About">
                <div className="text-5xl font-bold text-secondary">About Me</div>
                <div className="text-secondary">aoiwdehfai0owehg0iwefoihweoighw0ieg paragraph</div>
            </div>
            <div className="h-[43rem] bg-yellow-200" id="Projects">
                <div className="text-5xl font-bold">Projects</div>
            </div>
            <div className="h-[40rem] bg-green-200" id="Team">
                <div className="text-5xl text-secondary font-bold">Meet the Team</div>
                <div className="text-secondary">aiawjdaowhrgoaiwrhga paragraph</div>
            </div>
            <div className="h-[38rem] bg-blue-200" id="Publications">
                <div className="text-5xl font-bold">Publications</div>
            </div>
            <div className="h-[39rem] bg-purple-200" id="News">
                <div className="text-5xl text-secondary font-bold">News</div>
            </div>
            <div className="h-[17rem] bg-pink-200" id="Contact">
                <div className="text-2xl text-secondary font-bold">Want to be part of my lab?</div>
                <div className="text-secondary">Send your resume!</div>
            </div>
            <div className="h-[4rem] bg-black">
                <div className="text-secondary">Copyright @ 2023</div>
                <div className="text-secondary">McGill University</div>
                <div className="text-secondary">Douglas Hospital</div>
            </div>
        
        </>
    )
}

export default MainPage