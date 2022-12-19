import React from "react"

export default function TableHead() {
    return (
        <thead className="border-b">
            <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Title
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Description
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    More Details
                </th>
            </tr>
        </thead>
    )
}