"use client";

import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const navbarList = [
    {
      id: 1,
      label: "Beranda",
      link: "/",
    },

    {
      id: 4,
      label: "Blog",
      link: "/blog",
    },
    {
      id: 5,
      label: "Anggota",
      link: "/member",
    },
  ];
  return (
    <>
      <nav className=" border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              HJ Codin Tech
            </span>
          </Link>
          <button
            onClick={handleToggle}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
          >
            {isOpen ? (
              <Menu />
            ) : (
              <>
                <X />
              </>
            )}
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  :bg-gray-800 md:bg-gray-900 :border-gray-700">
              {navbarList.map((nav, index) => (
                <>
                  <li key={index}>
                    <Link
                      href={nav.link}
                      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 :text-white md::text-white"
                    >
                      {nav.label}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
