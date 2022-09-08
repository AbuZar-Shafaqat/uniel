import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "

                        >
                            Uniel
                        </a>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <Link to='/'>
                                <li className="nav-item px-6 py-2 flex items-center text-sm uppercase font-bold leading-snug  text-red-500">
                                    HOME
                                </li>
                            </Link>
                            <Link to='/Projects'>
                                <li className="nav-item px-6 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500">
                                    PROJECTS
                                </li>
                            </Link>
                            <Link to='/Services'>
                                <li className="nav-item px-6 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500">
                                    SERVICES
                                </li>
                            </Link>
                            <Link to='/About'>
                                <li className="nav-item px-6 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500">
                                    ABOUT
                                </li>
                            </Link>
                            {/* <Link> */}
                                <li className="nav-item px-6 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500">
                                    TEAM
                                </li>
                            {/* </Link> */}
                            {/* <Link> */}
                                <li className="nav-item px-6 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500">
                                    CLIENTS
                                </li>
                            {/* </Link> */}
                            {/* <Link> */}
                                <li className="nav-item px-6 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:text-red-500">
                                    CONTACT
                                </li>
                            {/* </Link> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}