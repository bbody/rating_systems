import React from "react"
import languages from "../data/languages"

export default function Implementations({ ratingSystem }: { ratingSystem: RatingSystem }) {
    const [selectedLanguage, setSelectedLanguage] = React.useState(() => languages[0])
    if (!ratingSystem.implementations) return (<></>)

    const languageSet = new Set<Language>()
    ratingSystem.implementations.forEach(implementation => {
        languageSet.add(implementation.language)
    })

    const implementedLanguages = Array.from(languageSet)
    if (selectedLanguage === null) {
        setSelectedLanguage(implementedLanguages[0])
    }

    const implementations = ratingSystem.implementations.filter(implementation => implementation.language === selectedLanguage)

    const activeClassList = "inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
    const defaultClassList = "inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
    return (
        <div className="w-full bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                {(implementedLanguages.map(language => {
                    const isActive = selectedLanguage === language

                    return (
                        <li className="mr-2" key={language.stub}>
                            <button type="button" role="tab" aria-controls={language.title} aria-selected="false" className={isActive ? activeClassList : defaultClassList} onClick={() => setSelectedLanguage(language)}>{language.title}</button>
                        </li>
                    )
                }
                ))}
            </ul>
            <div>
                <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
                    <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">{}</h2>
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        {implementations.map(implementation => {
                            return (
                                <li className="flex space-x-2" key={implementation.title + implementation.title}>
                                    <a href={implementation.link} target="_blank" rel="noreferrer">
                                        <span className="font-light leading-tight">{implementation.title}</span>
                                    </a>
                                </li>        
                            )
                        })}
                    </ul>
                </div>
                
            </div>
        </div>

    )
}
