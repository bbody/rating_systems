export const Python: Language = {
    title: "Python",
    stub: "python",
    icon: "python",
}

export const R: Language = {
    title: "R",
    stub: "rlang",
    icon: "r",
}

export const Julia: Language = {
    title: "Julia",
    stub: "julia",
    icon: "julia",
}

export const Go: Language = {
    title: "Go",
    stub: "golang",
    icon: "go",
}

export const Ruby: Language = {
    title: "Ruby",
    stub: "ruby",
    icon: "ruby",
}

export const CPP: Language = {
    title: "C++",
    stub: "cpp",
    icon: "cplusplus",
}

export const JavaScript: Language = {
    title: "JavaScript",
    stub: "js",
    icon: "javascript",
}

export const Rust: Language = {
    title: "Rust",
    stub: "rust",
    icon: "rust",
}

export const CSharp: Language = {
    title: "C#",
    stub: "csharp",
    icon: "csharp",
}

export const Kotlin: Language = {
    title: "Kotlin",
    stub: "kotlin",
    icon: "kotlin",
}

export const Elixir: Language = {
    title: "Elixir",
    stub: "elixir",
    icon: "elixir",
}

export const Lua: Language = {
    title: "Lua",
    stub: "lua",
    icon: "lua",
}

const languages: Language[] = [
    Python,
    R,
    Julia,
    Go,
    Ruby,
    CPP,
    JavaScript,
    Rust,
    CSharp,
    Kotlin,
    Elixir,
]

export function findLanguage(stub?: string | null): Language | null {
    if (!stub) return null

    const language = languages.find((language: Language) => language.stub === stub)

    return language ? language : null
}

export default languages
