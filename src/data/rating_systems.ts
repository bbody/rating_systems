import { CPP, CSharp, Elixir, Go, JavaScript, Julia, Kotlin, Lua, Python, R, Ruby, Rust } from "./languages"

export enum RatingSystemType {
    Elo = "elo",
    TrueSkill = "trueskill",
    TrueSkillThroughTime = "ttt",
    OpenSkill = "openskill",
    KickScore = "kickscore",
}


const Elo: RatingSystem = {
    "stub": RatingSystemType.Elo,
    "name": "Elo",
    "description": "Elo is a rating system used to rank players in competitive games such as chess and Go. It was created by Arpad Elo, a Hungarian-American physicist, in the 1950s. The Elo system assigns a rating to each player, which is a measure of that player's skill level. The rating is calculated based on the player's performance in matches against other players.",
    "license": "Non-proprietary",
    "primary_use": "Chess",
    "implementations": [
        {
            "title": "Elo",
            "link": "https://github.com/sublee/elo",
            "language": Python,
        }, {
            "title": "Multi Elo",
            "link": "https://github.com/qwhex/multi_elo",
            "language": Python,
        },
        {
            "title": "Elo",
            "link": "https://github.com/iain/elo",
            "language": Ruby,
        },
        {
            "title": "Elo Rating",
            "link": "https://github.com/mxhold/elo_rating",
            "language": Ruby,
        },
        {
            "title": "EloOptimized",
            "link": "https://cran.rstudio.com/web/packages/EloOptimized/index.html",
            "language": R,
        },
        {
            "title": "Elo Go",
            "link": "https://github.com/kortemy/elo-go",
            "language": Go,
        },
        {
            "title": "Elo Rank",
            "link": "https://www.npmjs.com/package/elo-rank",
            "language": JavaScript,
        },
        {
            "title": "Skill Rating",
            "link": "https://docs.rs/skill-rating/0.0.1/skill_rating/index.html",
            "language": Rust,
        },
        {
            "title": "Ranking.jl",
            "link": "https://github.com/jwarwick/Ranking.jl",
            "language": Julia,
        },
        {
            "title": "Elo",
            "link": "https://github.com/cardsorg/Elo",
            "language": CPP,
        },
        {
            "title": "EloRating",
            "link": "https://github.com/mattiasboustedt/EloRating",
            "language": CSharp,
        }
    ],
    "useful_resources": ["https://en.wikipedia.org/wiki/Elo_rating_system", "https://www.youtube.com/watch?v=AsYfbmp0To0"],
    "see_also": []
}

const TrueSkill = {
    "stub": RatingSystemType.TrueSkill,
    "name": "TrueSkill",
    "description": "TrueSkill is a rating system for players of competitive games that uses statistical analysis to predict the outcome of future matches and assign ratings to each player based on their skill level.",
    "license": "proprietary",
    "primary_use": "Online Games",
    "implementations": [
        {
            "title": "TrueSkill",
            "link": "https://trueskill.org/",
            "language": Python,
        }
    ],
    "useful_resources": ["http://www.moserware.com/2010/03/computing-your-skill.html"],
    "see_also": [RatingSystemType.TrueSkillThroughTime, RatingSystemType.OpenSkill]
}

const OpenSkill = {
    "stub": RatingSystemType.OpenSkill,
    "name": "OpenSkill",
    "description": "OpenSkill is a rating system for players of competitive games that uses statistical analysis to predict the outcome of future matches and assign ratings to each player based on their skill level. It is a modification of the original TrueSkill rating system that allows for the rating of players over time.",
    "license": "Open Source",
    "primary_use": "",
    "implementations": [
        {
            "title": "OpenSkill.py",
            "link": "https://github.com/OpenDebates/openskill.py",
            "language": Python,
        },
        {
            "title": "OpenSkill.js",
            "link": "https://github.com/philihp/openskill.js",
            "language": JavaScript,
        },
        {
            "title": "OpenSkill.kt",
            "link": "https://github.com/brezinajn/openskill.kt",
            "language": Kotlin,
        },
        {
            "title": "OpenSkill.ex",
            "link": "https://github.com/philihp/openskill.ex",
            "language": Elixir,
        },
        {
            "title": "OpenSkill.lua",
            "link": "https://github.com/bstummer/openskill.lua",
            "language": Lua,
        }
    ],
    "useful_resources": [],
    "see_also": [RatingSystemType.TrueSkill]
}

const KickScore = {
    "stub": RatingSystemType.KickScore,
    "name": "KickScore",
    "description": "kickscore is the dynamic skill rating system.",
    "license": "MIT license",
    "primary_use": "Sports Predictions",
    "implementations": [
        {
            "title": "kickscore",
            "link": "https://github.com/lucasmaystre/kickscore",
            "language": Python,
        },
        {
            "title": "gokick",
            "link": "https://github.com/lucasmaystre/gokick",
            "language": Go,
        }
    ],
    "useful_resources": ["https://kickoff.ai/"],
    "see_also": [RatingSystemType.Elo, RatingSystemType.TrueSkill]
}


const TrueSkillThroughTime: RatingSystem = {
    "stub": RatingSystemType.TrueSkillThroughTime,
    "name": "TrueSkill Through Time",
    "description": "TrueSkill Through Time is a rating system for players of competitive games that uses statistical analysis to predict the outcome of future matches and assign ratings to each player based on their skill level. It is a modification of the original TrueSkill rating system that allows for the rating of players over time.",
    "license": "",
    "primary_use": "Online Games",
    "implementations": [
    ],
    "useful_resources": [],
    "see_also": [RatingSystemType.TrueSkill]
}


export const ratingSystemsList: RatingSystem[] = [
    Elo,
    TrueSkill,
    OpenSkill,
    TrueSkillThroughTime,
    KickScore,
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
