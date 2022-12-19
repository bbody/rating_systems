import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { findLanguage } from "../data/languages";
import Heading from "./Heading";
import { SearchLanguagePill } from "./SearchLanguagePill";

export default function SearchSummary() {
    const [searchParams, setSearchParams] = useSearchParams()
    const languageName = searchParams.get("language")
    const language = findLanguage(languageName)

    const clearLanguage = () => {
        setSearchParams("")
    }
    
    if (!language) {
        return (
            <Fragment></Fragment>
        )
    }
    
    return (
        <Heading title="Search">
            <SearchLanguagePill language={language} close={clearLanguage}></SearchLanguagePill>
        </Heading>
    )
}
