import React from "react"
import Devicon from "./Devicon"

export default function LanguageSideBarItem({ language: { stub, title, icon }, active = false }: { language: Language, active: boolean }) {
    let classes = "text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
    if (!active) classes += " bg-gray-100"
    return (
        <li>
            <a href="#" className={classes}>
                <Devicon icon={icon} />
                <span className="ml-3">{title}</span>
            </a>
        </li>
    )
}
