import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import HeaderLogo from '../assets/images/logo2.png';

const Header = () => {
    const [open, setOpen] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setOpen(pre => !pre);
    };
    const handleIsOpen = () => {
        // eslint-disable-next-line no-console
        console.log(isOpen);
        setIsOpen(!isOpen);
    };

    const handleMenu = (e) => {
        if (e === 'profile') {
            setOpen(false);
        } else if (e === 'settings') {
            setOpen(false);
        } else if (e === 'sign-out') {
            setOpen(false);
        }
    };

    return (
        <>
            <nav
                className="fixed relative top-0 z-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
                <div className=" px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" onClick={handleIsOpen}
                                aria-controls="logo-sidebar" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-100 rounded-lg md:hidden bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"/>
                                </svg>
                            </button>

                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <button type="button"
                                    className="rounded-full bg-blue-700 p-1 mr-3 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                                    </svg>
                                </button>
                                <div>
                                    <button type="button" onClick={handleOpen}
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-blue-700 dark:focus:ring-gray-600"
                                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="user photo" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${isOpen ? 'translate-x-0' : 'sm:translate-x-0'}`}
                aria-label="Sidebar">
                <div className="flex">
                    <a href="#" className="flex ml-2 md:mr-24">
                        <img src={HeaderLogo} className="h-8 mr-3"
                            alt="Logo"/>
                        <span>Confilunce</span>
                    </a>
                    <button type="button" onClick={handleIsOpen}
                        className={`bg-white rounded-md p-2 ml-14 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${isOpen ? '' : 'hidden'}`}>
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="min-h-screen flex flex-row">
                    <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                        <ul className="flex flex-col py-4">
                            <li>
                                <a href="#"
                                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                        className="bx bx-home"/></span>
                                    <span className="text-sm font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                        className="bx bx-music"/></span>
                                    <span className="text-sm font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                        className="bx bx-drink"/></span>
                                    <span className="text-sm font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                        className="bx bx-chat"/></span>
                                    <span className="text-sm font-medium">Chat</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                        className="bx bx-user"/></span>
                                    <span className="text-sm font-medium">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                        className="bx bx-log-out"/></span>
                                    <span className="text-sm font-medium">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>

            {open
                ? <div
                    className="absolute right-5 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                    <a href="#" onClick={() => handleMenu('profile')} className="block px-4 py-2 hover:bg-slate-300 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                        id="user-menu-item-0">Your Profile</a>
                    <a href="#" onClick={() => handleMenu('settings')} className="block px-4 py-2 hover:bg-slate-300 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                        id="user-menu-item-1">Settings</a>
                    <a href="#" onClick={() => handleMenu('sign-out')} className="block px-4 py-2 hover:bg-slate-300 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                        id="user-menu-item-2">Sign out</a>
                </div>
                : null}
        </>
    );
};
export default Header;
