import React from "react"

export default function Heading({ title, children }: { title: string, children?: React.ReactNode }) {
    return (
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
            <div className="mb-1 w-full">
                <div className="mb-4">
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h1>
                </div>
                {children && (
                    <div className="mb-4">
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}
