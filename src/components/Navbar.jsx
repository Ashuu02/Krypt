import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex flex-row hidden list-none justify-between items-center flex-initial ">
        {["Market", "Tutorials", "Exchange", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}

        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu 
        ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white cursor-ponter md:hidden "
            onClick={() => setTogglemenu(false)}
          />
        ) 
        : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white cursor-ponter md:hidden "
            onClick={() => setTogglemenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 top-0 -right-2 fixed p-3 w-[70vw] h-screen shadow-2xl list-none md:hidden
            flex flex-col items-end rounded-md justify-start blue-glassmorphism text-white animate-slide-in
          ">
            <li className="w-full my-2 text-xl ">
              <AiOutlineClose onClick={() => setTogglemenu(false)} />
            </li>
            {["Market", "Tutorials", "Exchange", "Wallets"].map(
              (item, index) => (
                <NavbarItem key={item + index} title={item} classProps='my-2 text-lg'/>
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
