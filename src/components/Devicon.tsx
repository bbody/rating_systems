import React from "react"

export default function Devicon({ icon }: { icon: string }) {
    return (
        <i className={`devicon-${icon}-plain`}></i>
    )
}
