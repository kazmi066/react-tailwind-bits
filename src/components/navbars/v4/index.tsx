import { useState } from "react";

export const Navbar4 = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div>
            <a
              href="#"
              className=" md:inline-block hidden rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:no-underline"
              aria-current="page"
            >
              Sign In
            </a>

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
            <li>
              <a
                href="#"
                className="block rounded-md bg-white p-3 text-sm font-medium text-black hover:no-underline hover:bg-slate-100 hover:text-black"
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
