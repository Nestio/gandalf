import { packageName } from './constants'

// We replace lodash's camelCase with a simpler version
export const toCamelCase = (str: string): string => {
    if (!str || (!str.includes('-') && !str.includes('_'))) return str

    return str
        .toLowerCase()
        .replace(/[-_]+(.)?/g, (_match, char) =>
            char ? char.toUpperCase() : ''
        )
}

export const partial =
    <R, T, U extends unknown[]>(fn: (first: T, ...rest: U) => R, firstArg: T) =>
    (...rest: U) =>
        fn(firstArg, ...rest)

export const logMessage = (
    type: 'log' | 'error' | 'warn',
    errorNumber: number
) => {
    const formattedErrorNumber = errorNumber.toString()
    const formattedErrorType = type.toUpperCase()
    const errorUrl = `https://github.com/Nestio/gandalf/blob/main/docs/${type}.md`

    return console[type](
        `(${packageName}) %c${formattedErrorType} ${formattedErrorNumber}:%c ${errorUrl}#${formattedErrorNumber}`,
        'font-weight: bold',
        'font-weight: normal'
    )
}

export const logError = partial(logMessage, 'error')
export const logWarn = partial(logMessage, 'warn')
export const logLog = partial(logMessage, 'log')
