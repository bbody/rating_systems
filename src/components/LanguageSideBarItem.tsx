import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import Devicon from "./Devicon"

export default function LanguageSideBarItem({ language: { stub, title, icon }, closeSidebar }: { language: Language, closeSidebar: () => void }) {
    const [searchParams] = useSearchParams()
    const active = searchParams.get("language") === stub

    let classes = "text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
    if (active) classes += " bg-gray-100"
    return (
        <li>
            <Link to={`/?language=${stub}`} className={classes} onClick={closeSidebar}>
                <Devicon icon={icon} />
                <span className="ml-3">{title}</span>
            </Link>
        </li>
    )
}
