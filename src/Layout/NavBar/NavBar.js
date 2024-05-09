import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavBar() {
return (
    <>
    <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
            <div className="col-span-1 lg:block hidden">
                {/* logo (aici trebuie schimbat conform) */}
                <Link to="/">
                    <img src="/public/logo.jpg" alt="logo" className="w-full h-12 object-contain"/>
                </Link>
            </div>
            {/*search Form */}
            <div className="col-span-3">
                <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
                    <button type="submit" className="bg-subMain w-12 flex-colo h-12 rounded text-white">
                {/* icon luat de la : https://react-icons.github.io/react-icons/search/#q=search */}
                    <FaSearch/>
                    </button>
                </form>
            </div>
            {/* menu */}

        </div>
    </div>
    
    </>
)
}

export default NavBar
