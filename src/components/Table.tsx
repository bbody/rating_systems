import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default function Table({ ratingSystems }: { ratingSystems: RatingSystem[]}) {
    return <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        <TableHead />
                        <tbody>
                            {ratingSystems.map((ratingSystem) => (
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