import { useState } from "react";

export const Navbar9 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#fffaf1] my-2 w-full md:rounded-full">
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
              <ul className="m-0 md:flex items-center gap-x-1 hidden list-none">
                <li
                  className="group text-[#35447a] no-underline hover:no-underline flex items-center gap-1 relative
                    hover:bg-white rounded-2xl px-3 py-[2px] font-medium transition-all hover:shadow-[0px_0px_37px_-6px_rgba(252,184,65,1)]
                    hover:text-[#35447a]"
                  onMouseEnter={() => setActivePanel("about")}
                  onMouseLeave={() => setActivePanel("")}
                >
                  <span className="pointer-events-none">About</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                  {activePanel === "about" && (
                    <>
                      <div className="absolute top-full left-0 right-0 h-4 bg-transparent"></div>
                      <div
                        className="absolute right-0 top-10 z-10 min-w-52 bg-white rounded-xl overflow-hidden
                      shadow-[0px_0px_20px_-4px_rgba(252,104,65,1)] text-left transition-all"
                      >
                        <ul className="m-0 px-0 py-2 space-y-[1px] list-none">
                          <li>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm font-medium text-[#35447a] hover:text-black"
                              aria-current="page"
                            >
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm font-medium text-[#35447a] hover:text-black"
                              aria-current="page"
                            >
                              Account Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </li>
                <li
                  className="group text-[#35447a] no-underline hover:no-underline flex items-center gap-1 relative
                    hover:bg-white rounded-2xl px-3 py-[2px] font-medium transition-all hover:shadow-[0px_0px_37px_-6px_rgba(252,184,65,1)]
                    hover:text-[#35447a]"
                  onMouseEnter={() => setActivePanel("movies")}
                  onMouseLeave={() => setActivePanel("")}
                >
                  <span className="pointer-events-none">Movies</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                  {activePanel === "movies" && (
                    <>
                      <div className="absolute top-full left-0 right-0 h-4 bg-transparent"></div>
                      <div
                        className="absolute right-0 top-10 z-10 min-w-52 bg-white rounded-xl overflow-hidden
                        shadow-[0px_0px_20px_-4px_rgba(252,104,65,1)] text-left transition-all"
                      >
                        <ul className="m-0 px-0 py-2 space-y-[1px] list-none">
                          <li>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm font-medium text-[#35447a] hover:text-black"
                              aria-current="page"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm font-medium text-[#35447a] hover:text-black"
                              aria-current="page"
                            >
                              Horror
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-3 py-1 text-sm font-medium text-[#35447a] hover:text-black"
                              aria-current="page"
                            >
                              Sci-fi
                            </a>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              </ul>
            </nav>
            <div className="relative flex">
              <img
                className="w-10 h-10 rounded-full border-2 border-solid border-gray-400 cursor-pointer"
                src="https://pagedone.io/asset/uploads/1704275541.png"
                alt="Bordered avatar"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              <div
                className={`w-80 inline-block absolute -right-[200%] md:right-1/2 top-full z-10
                  bg-[#fffaf1] rounded-xl overflow-hidden shadow-md shadow-black text-left transition-all
                  ${
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
                      className="block p-3 bg-white text-sm font-medium text-black hover:no-underline"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block bg-white p-3 text-sm font-medium text-black hover:no-underline"
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
