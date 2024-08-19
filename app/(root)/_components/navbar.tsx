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
      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-10" alt="HJ Codin Tech Logo" />
            <span className="hidden md:flex self-center text-2xl font-semibold whitespace-nowrap text-white">
              HJ Codin Tech
            </span>
          </Link>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  text-gray-400  focus:ring-gray-600"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full   md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className={
                isOpen
                  ? "font-medium flex flex-col p-4 md:p-0 my-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900"
                  : "font-medium flex items-center  p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900"
              }
            >
              {navbarList.map((nav) => (
                <li key={nav.id}>
                  <Link
                    href={nav.link}
                    className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-white md:p-0 hover:bg-gray-700 hover:text-white"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
