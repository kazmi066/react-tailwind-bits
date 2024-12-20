import { useState } from "react";

export const Navbar7 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 my-2 w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500">
      <div className="mx-auto max-w-[1500px] p-3">
        <div className="flex items-center justify-between">
          {/* Left Panel */}
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>

          {/* Right Panel */}
          <div className="flex items-center gap-5">
            <nav className="right-panel">
              <ul className="m-0 md:flex items-center gap-x-5 hidden list-none">
                <li>
                  <a
                    href="#"
                    className="text-white no-underline hover:no-underline hover:text-gray-200"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white no-underline hover:no-underline hover:text-gray-200"
                    aria-current="page"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white no-underline hover:no-underline hover:text-gray-200"
                    aria-current="page"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-black hover:no-underline hover:bg-black hover:text-white"
                    aria-current="page"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-md p-2 bg-gray-700 text-white cursor-pointer md:hidden inline-block"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 transform transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Conditionally Render Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
          id="mobile-menu"
        >
          <ul className="m-0 px-0 space-y-1 pb-3 pt-2 list-none">
            <li>
              <a
                href="#"
                className="block rounded-md bg-slate-200 p-3 text-sm font-medium text-black hover:text-gray-500 hover:no-underline"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md bg-slate-200 p-3 text-sm font-medium text-black hover:text-gray-500 hover:no-underline"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md bg-slate-200 p-3 text-sm font-medium text-black hover:text-gray-500 hover:no-underline"
                aria-current="page"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md bg-black p-3 text-sm font-medium text-white hover:no-underline hover:bg-white hover:text-black"
                aria-current="page"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
