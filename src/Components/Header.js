import React, {useState} from "react";

const Header=()=>{
    const [open,setOpen]=useState(null)
    const [isOpen,setIsOpen]=useState(null)

    const handleOpen=()=>{
        setOpen(!open)
    }
    const handleIsOpen=()=>{
        setIsOpen(!isOpen)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const handleMenu=(e)=>{
        if (e==="profile"){
            setOpen(false)
        }else if (e==="settings"){
            setOpen(false)
        }else if (e==="sign-out"){
            setOpen(false)
        }
    }

    return(
        <>
            <nav className="bg-slate-50 shadow-lg ">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" onClick={handleIsOpen}
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="block h-8 w-auto lg:hidden"
                                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                     alt="Your Company" />
                                    <img className="hidden h-8 w-auto lg:block"
                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                         alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#"
                                       className="bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                       aria-current="page">Dashboard</a>

                                    <a href="#"
                                       className="text-gray-700 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                                    <a href="#"
                                       className="text-gray-700 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                                    <a href="#"
                                       className="text-gray-700 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign-in</a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="relative ml-3">
                                <div>
                                    <button  type="button" onClick={handleOpen}
                                            className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full"
                                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt="" />
                                    </button>
                                </div>

                                {open && (<div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none pointer-events-auto"
                                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                    tabIndex="-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"  role="menuitem" onClick={()=>handleMenu('profile')}
                                       tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" onClick={()=>handleMenu('settings')}
                                       tabIndex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" onClick={()=>handleMenu('sign-out')}
                                       tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen ? (<div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <a href="#" className="bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                           aria-current="page">Dashboard</a>

                        <a href="#"
                           className="text-gray-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                        <a href="#"
                           className="text-gray-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                        <a href="#"
                           className="text-gray-7   00 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign-in</a>
                    </div>
                </div>) : null}
            </nav>
        </>
    )
}
export default Header;