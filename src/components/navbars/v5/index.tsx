import { useState } from "react";

export const Navbar5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 my-2 w-full">
      <div className="mx-auto max-w-[1500px] p-3">
        <div className="flex items-center justify-between">
          {/* Left Panel */}
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <nav className="right-panel">
              <ul className="m-0 md:flex items-center gap-x-5 hidden list-none">
                <li>
                  <a
                    href="#"
                    className="underline text-white hover:no-underline"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline text-white hover:no-underline"
                    aria-current="page"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline text-white hover:no-underline"
                    aria-current="page"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Panel */}
          <div className="flex items-center gap-5">
            <div className="relative flex">
              <img
                className="w-10 h-10 rounded-full border-2 border-solid border-gray-400 cursor-pointer"
                src="https://pagedone.io/asset/uploads/1704275541.png"
                alt="Bordered avatar"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              <div
                className={`w-80 inline-block absolute -right-[200%] md:right-1/2 top-full z-10 bg-white rounded-xl shadow-md text-left transition-all overflow-hidden ${
                  isMenuOpen
                    ? "visible opacity-100 pointer-events-auto"
                    : "invisible opacity-0 pointer-events-none"
                }`}
              >
                <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1715323614.png"
                      alt="image"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="block">
                      <h5 className="text-sm text-gray-900 font-medium m-0">John Doe</h5>
                      <span className="text-sm text-gray-500 font-normal m-0">@johndoe12</span>
                    </div>
                  </div>
                </div>
                <ul className="m-0 px-0 space-y-[1px] list-none">
                  <li>
                    <a
                      href="#"
                      className="block p-3 bg-gray-900 text-sm font-medium text-white hover:no-underline"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block bg-gray-900 p-3 text-sm font-medium text-white hover:no-underline"
                      aria-current="page"
                    >
                      Account Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>

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
                className="block rounded-md bg-gray-900 p-3 text-sm font-medium text-white hover:no-underline"
                aria-current="page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md bg-gray-900 p-3 text-sm font-medium text-white hover:no-underline"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md bg-gray-900 p-3 text-sm font-medium text-white hover:no-underline"
                aria-current="page"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
