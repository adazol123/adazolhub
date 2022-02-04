import Navlist from "./Navlist"
import { Home, Work, Profile, InfoSquare } from "./NavSVG"

export default function Navbar() {



    return (
        <header className="sticky top-0  z-40 overflow-y-auto w-auto ">
            <nav className=' bg-transparent min-h-[48px] flex justify-center items-center shadow-md shadow-slate-800 backdrop-blur-sm'>
                    <div className="container mx-auto px-4 flex justify-between items-center"> 
                        <div className="logo text-lg font-bold">
                        <span className='text-green-300'>ADAZOL</span>HUB.
                        </div>
                        <div className="nav-links flex">

                        

                            <div className="contact-button transition-all grid place-items-center ">
                                <a href="#" className="fill-green-300 rounded-lg">
                                    <InfoSquare/>
                                </a>
                            </div>
                        </div>
                    <div className="absolute mx-4 w-[calc(100%-2rem)] h-[1px] left-0 bottom-0 bg-cyan-100/20">

                    </div>
                    </div>
                </nav>
        </header>
    )
}