import React from "react"
import { useParams } from "react-router-dom";
import Heading from "../components/Heading";
import Implementations from "../components/Implementations";
import { ratingSystemsMap } from "../data/rating_systems"
import NotFound from "./NotFound";

export default function Details() {
    let { ratingSystem: slug } = useParams()
    if (slug === undefined || !(slug in ratingSystemsMap)) {
        return (
            <NotFound/>
        )
    }

    const ratingSystem = ratingSystemsMap[slug]

    return (
        <div className="bg-white">
            <Heading title={ratingSystem.name}></Heading>
            <div className="px-4 mb-1 w-full">
                <p>{ratingSystem.description}</p>
            </div>
            <Implementations ratingSystem={ratingSystem}/>
        </div>
    )
}
