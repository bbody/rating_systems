import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default function Table({ ratingSystems }: { ratingSystems: RatingSystem[] }) {
    return (
        <table className="min-w-full">
            <TableHead />
            <tbody>
                {ratingSystems.map((ratingSystem) => (
                    <TableRow key={ratingSystem.name} ratingSystem={ratingSystem} />
                ))}
            </tbody>
        </table>
    )
}