import React from "react";
import Logo from "../../assets/Images/logo.png";
import Search from "../Search/Search";
import IconGrubNavbar from "../elements/IconGrubNavbar";

const NavbarAuthentication = ({search}) => {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex h-[84px] w-full max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 md:px-16">
        <a className="block text-teal-600" href="#">
          <img src={Logo} alt="Logo" className="h-[53px] w-[98px]" />
        </a>
        {search && <Search />}
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
          </nav>
          <div className="flex items-center gap-4">
            <IconGrubNavbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarAuthentication;
