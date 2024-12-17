// We replace lodash's camelCase with a simpler version
export const toCamelCase = (str: string): string => {
    if (!str || (!str.includes('-') && !str.includes('_'))) return str

    return str
        .toLowerCase()
        .replace(/[-_]+(.)?/g, (_match, char) =>
            char ? char.toUpperCase() : ''
        )
}
