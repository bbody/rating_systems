import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Page from "../components/Page"
import SideBar from "../components/SideBar"

export default function Layout() {
    const [showSidebar, setShowSidebar] = useState(false)
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }
    const closeSidebar = () => {
        setShowSidebar(false)
    }

    return (
        <>
            <NavBar showSidebarToggle={toggleSidebar} sidebarOpen={showSidebar} />
            <div className="flex overflow-hidden bg-white pt-16">
                <SideBar showSidebar={showSidebar} closeSidebar={closeSidebar} />
                <Page>
                    <Outlet />
                </Page>
            </div>
        </>
    )
}