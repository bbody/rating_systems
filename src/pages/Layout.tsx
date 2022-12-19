import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

export default function Layout() {
    return (
        <>
            <NavBar />
            <div className="flex overflow-hidden bg-white pt-16">
                <SideBar />
                <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main>
                        <Outlet />
                    </main>
                </div></div>
        </>
    )
}