import { Python, Ruby } from "./languages"

export const ratingSystemsList: RatingSystem[] = [
    {
        "stub": "elo",
        "name": "Elo",
        "description": "description",
        "license": "",
        "primary_use": "",
        "implementations": [
            {
                "title": "TrueSkill",
                "link": "https://github.com/sublee/trueskill",
                "language": Python,
            }
        ],
        "useful_resources": [],
        "see_also": []
    },
    {
        "stub": "trueskill",
        "name": "TrueSkill",
        "description": "description",
        "license": "",
        "primary_use": "",
        "implementations": [
            {
                "title": "Elo",
                "link": "https://github.com/sublee/elo",
                "language": Ruby,
            }
        ],
        "useful_resources": [],
        "see_also": []
    }
]

export const getRatingSystemsByLanguage = (language: string | null): RatingSystem[] => {
    if (!language || language === 'All') return ratingSystemsList

    return ratingSystemsList.filter((ratingSystem: RatingSystem) => {
        return ratingSystem.implementations?.map((implementation: Implementation) => implementation.language.stub.toLowerCase()).includes(language.toLowerCase())
    })
}

export const ratingSystemsMap: RatingSystemsMap = ratingSystemsList.reduce(function (accumulator: RatingSystemsMap, value: RatingSystem) {
    return { ...accumulator, [value.stub]: value }
}, {})
