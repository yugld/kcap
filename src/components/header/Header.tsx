import { useEffect, useState } from "react";
import OpenMenu from "./OpenMenu";
import ClosedMenu from "./closedMenu";
import { pages } from "./dataHeader";

export default function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.scrollY > 50)
            );
        }
    }, []);

    return (
        <header
            className={`${
                small ? "bg-background bg-opacity-90" : ""
            } w-full fixed top-0 left-0 right-0 transition-all duration-500 z-10`}
        >
            <nav
                className={`  mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 text-white`}
            >
                <div className="z-30 py-2.5">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="mob_menu absolute inset-y-0 left-0 flex items-center lg:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none hover:bg-background hover:bg-opacity-70 focus:bg-background focus:bg-opacity-70 transition duration-150 ease-in-out"
                                aria-label="Main menu"
                                aria-expanded={openMobileMenu}
                                onClick={() =>
                                    setOpenMobileMenu(!openMobileMenu)
                                }
                            >
                                {openMobileMenu ? <OpenMenu /> : <ClosedMenu />}
                            </button>
                        </div>
                        <div className="logo flex justify-center w-full lg:w-fit lg:justify-start">
                            <div className="flex-shrink-0 lg:mt-2 md:mt-2">
                                <a href="/">KCAP LOGO</a>
                            </div>
                        </div>
                        <div className="links hidden lg:block lg:ml-6">
                            <div className="flex">
                                {pages.map(({ path, name, id }) => (
                                    <a
                                        href={path}
                                        className="px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                        key={id}
                                    >
                                        {name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="link-call absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                            <a
                                href=""
                                className="inline-flex px-3 py-2 gap-4 rounded-md text-sm font-medium leading-5 focus:outline-none focus:text-white transition duration-150 ease-in-out"
                            >
                                <span className="hidden lg:block">
                                    Оставить заявку
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 block lg:hidden"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {openMobileMenu && (
                    <div className="lg:hidden block">
                        <div className="px-2 pt-2 pb-3 bg-background bg-opacity-70 rounded-lg w-fit">
                            {pages.map(({ path, name, id }) => (
                                <a
                                    href={path}
                                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                    key={id}
                                >
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
