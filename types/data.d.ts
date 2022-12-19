
type Language = {
    title: string,
    stub: string,
    icon: string,
}

type Implementation = {
    title: string,
    link: string,
    language: Language
}

type RatingSystem = {
    name: string,
    stub: string,
    description: string,
    license: string,
    primary_use: string,
    implementations?: Implementation[]
    useful_resources?: string[]
    see_also?: string[]
}

type RatingSystemsMap = {
    [key: string]: RatingSystem,
}
