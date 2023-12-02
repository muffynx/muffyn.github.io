import logo from "../assets/image.jpg"

export default function Navbar({activePage}){
    return(
        <div className="bg-stone-800 p-5 border-b border-gray-500/50 flex flex-col md:flex-row md:justify-between">
            <img className="w-[50px]" src={logo} alt ="logo" />
            <div className="flex flex-col md:flex-row mt-5 gap-4">
                <a href="/"className={`${activePage == "home" ? "text-red-500" : "text-black"} `}>Home</a>
                <a href="/contact"className={`${activePage == "contact" ? "text-red-500" : "text-black"} `}>Contact</a>
                {activePage}
            </div>
        </div>
    )
}