import React from "react"
import { Link } from "react-router-dom"
import SideBarToggle from "./SideBarToggleButton"

export default function NavBar({ showSidebarToggle, sidebarOpen }: { showSidebarToggle: () => void, sidebarOpen: boolean }) {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <SideBarToggle showSidebarToggle={showSidebarToggle} sidebarOpen={sidebarOpen} />
                        <Link to="/" className="text-xl font-bold flex items-center lg:ml-2.5">
                            <span className="self-center whitespace-nowrap">Rating Systems</span>
                        </Link>
                        <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                            <label className="sr-only">Search</label>
                            <div className="mt-1 relative lg:w-64">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                    {/*<div className="flex items-center">
                        <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                            <span className="sr-only">Search</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>*/}
                </div>
            </div>
        </nav >
    )
}
