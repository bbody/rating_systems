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
                "language": "Python"
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
                "language": "Python"
            }
        ],
        "useful_resources": [],
        "see_also": []
    }
]

export const ratingSystemsMap: RatingSystemsMap = ratingSystemsList.reduce(function (accum, value) {
    return { ...accum, [value.stub]: value }
}, {})


// export const ratingSystems: RatingSystem[] = ratingSystemsMap.