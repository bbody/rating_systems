import React, { Fragment } from "react"
import { useParams } from "react-router-dom";
import { ratingSystemsMap, ratingSystemsList } from "../data/rating_systems"
import NotFound from "./NotFound";

//{ ratingSystem: stub }: { ratingSystem: string }
export default function Details() {
    let { ratingSystem: slug } = useParams();
    console.log(ratingSystemsList)
    if (slug === undefined) {
        return (
            <NotFound/>
        )
    }
    
    const ratingSystem = ratingSystemsMap[slug]
    if (ratingSystem === undefined) {
        return (
            <NotFound/>
        )
    }

    return (
        <Fragment>
            {ratingSystem.name}
        </Fragment>
    )
}
