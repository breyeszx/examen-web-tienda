import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { MdLogout, MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="fixed top-0 left-0 m-auto pl-4 w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        {/* logo */}
        <div>
          <Link>
            <img src={logo} height={66} width={66} alt="logo" />
          </Link>
        </div>
        {/* navbar desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* bavbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5transition-all duration-300 -right-[100%]"
          }`}
        />
        {/* buttons */}
        <div className="flexBetween sm:gap-x-6 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaCartShopping className="p-1 h-7 w-7 " />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                0
              </span>
            </NavLink>
            {/* <NavLink
              to={"logout"}
              className={"btn_secondary_rounded flexCenter gap-x-1 medium-6"}
            >
              <img src={logout} alt="logout" height={18} width={18} />
              Logout
            </NavLink> */}
            <NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-1 medium-6"}
            >
              <img src={user} alt="logout" height={18} width={18} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;