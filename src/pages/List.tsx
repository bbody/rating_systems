import React, { Fragment } from "react"
import { useSearchParams } from "react-router-dom"
import SearchSummary from "../components/SearchSummary"
import Table from "../components/Table"
import { getRatingSystemsByLanguage, ratingSystemsList } from '../data/rating_systems';

export default function List() {
    const [searchParams] = useSearchParams()
    const language = searchParams.get("language")
    const ratingSystems = getRatingSystemsByLanguage(language)

    return (
        <Fragment>
            <SearchSummary/>
            <Table ratingSystems={ratingSystems}/>
        </Fragment>
    )
}
