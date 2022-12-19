import React from 'react';
import { Link } from 'react-router-dom';

function Column({ attribute, stub }: { attribute: string, stub: string }) {
    return (
        <td className="text-left text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <Link to={`rating_system/${stub}`} className="block">{attribute}</Link>
        </td>
    )
}

export default function TableRow({ ratingSystem: { stub, name, description, license } }: { ratingSystem: RatingSystem }) {
    return (
        <tr className="border-b">
            <Column attribute={name} stub={stub} />
            <Column attribute={description} stub={stub} />
            <Column attribute={license} stub={stub} />
        </tr>
    )
}