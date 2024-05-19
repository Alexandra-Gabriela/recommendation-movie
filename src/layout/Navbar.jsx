import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import moviepicks from "../assets/icons/moviepicks.jpg";
import { AuthContext } from "../context/AuthContext";

const hover="hover:text-subMain transitions text-white";
const Hover= ({isActive}) => (isActive? 'text-subMain': hover);

const Navbar = () => {
  const { currentUser, logOut } = useContext(AuthContext);

  return (
    <div>
      <nav
          className="flex w-full flex-wrap items-center justify-between py-3 shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
          style={{
            backgroundImage: "linear-gradient(to right, #9b1d20, #662d8c, #e67071)", 
            color: "dark.text-neutral-200"
          }}
          data-te-navbar-ref=""
        >
        <div className="flex w-full flex-wrap items-center justify-between px-6 font-serif">
          <img className="h-10 m-2 rounded-full" src={moviepicks}></img>
          <Link className="pr-2 text-2xl font-semibold font-family:cursive" to="/">
            MoviePicks  
          </Link>

          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="relative flex items-center ml-auto">
             <NavLink to="/search" className={`${Hover} mr-4`}>Search by Actor</NavLink>
            <NavLink to="/aboutus" className={`${Hover} mr-4`}>About Us</NavLink>
           
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser.displayName}</h5>
            )}
       
            <div className="relative" data-te-dropdown-ref="">
              <span
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref=""
                aria-expanded="false"
              >
                <img
                  src={currentUser.photoURL || avatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt=""
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </span>
              <ul
                className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref=""
              >
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/register"
                    data-te-dropdown-item-ref=""
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/login"
                    data-te-dropdown-item-ref=""
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <span
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    role="button"
                    data-te-dropdown-item-ref=""
                    onClick={() => logOut()}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[52px]"></div>
    </div>
  );
};

export default Navbar;
