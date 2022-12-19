import React from 'react';
import { ratingSystemsList } from '../data/rating_systems';
import TableRow from './TableRow';

function TableHead() {
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

export default function Table() {
    return <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        <TableHead />
                        <tbody>
                            {ratingSystemsList.map((ratingSystem) => (
                                <TableRow key={ratingSystem.name} ratingSystem={ratingSystem} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    // return (
    //     <Fragment>
    //         {
    //             ratingSystemsList.map((ratingSystem: RatingSystem) => (
    //                 <ListItem
    //                     key={ratingSystem.name}
    //                     ratingSystem={ratingSystem}
    //                     />
    //             ))
    //         }
    //     </Fragment>
    // )
}