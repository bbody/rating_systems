import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { findLanguage } from "../data/languages";
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
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
            <div className="mb-1 w-full">
                <div className="mb-4">
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Search</h1>
                </div>
                <div className="mb-4">
                    <SearchLanguagePill language={language} close={clearLanguage}></SearchLanguagePill>
                </div>
            </div>
        </div>
    )
}
