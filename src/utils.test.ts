import { test, expect, mock, describe, beforeAll, afterAll } from 'bun:test'
import { toCamelCase, partial, logMessage } from './utils'

describe('toCamelCase', () => {
    test('toCamelCase', () => {
        expect(toCamelCase('hello-world')).toBe('helloWorld')
    })

    test('toCamelCase with underscore', () => {
        expect(toCamelCase('hello_world')).toBe('helloWorld')
    })

    test('toCamelCase with no hyphens', () => {
        expect(toCamelCase('hello')).toBe('hello')
    })

    test('toCamelCase with empty string', () => {
        expect(toCamelCase('')).toBe('')
    })

    test('convoluted super long Launch Darkly flag name', () => {
        expect(
            toCamelCase('ld-display-some-New-feature-VARIATION-12042024')
        ).toBe('ldDisplaySomeNewFeatureVariation12042024')
    })
})

describe('partial', () => {
    test('partial with two args', () => {
        const add = (a: number, b: number) => a + b
        const add5 = partial(add, 5)
        expect(add5(5)).toBe(10)
    })

    test('partial with three args', () => {
        const add = (a: number, b: number, c: number) => a + b + c
        const add5 = partial(add, 5)
        expect(add5(5, 5)).toBe(15)
    })
})

describe('logMessage', () => {
    const originalConsole = global.console
    const logMock = mock()
    const warnMock = mock()
    const errorMock = mock()

    beforeAll(() => {
        global.console = {
            ...originalConsole,
            log: logMock,
            warn: warnMock,
            error: errorMock,
        }
    })

    afterAll(() => {
        logMock.mockRestore()
        warnMock.mockRestore()
        errorMock.mockRestore()
    })

    test('Calls console.log', () => {
        logMessage('log', 1)

        expect(console.log).toHaveBeenCalledWith(
            '(ld-redux) %cLOG 1:%c https://github.com/Nestio/gandalf/blob/main/docs/log.md#1',
            'font-weight: bold',
            'font-weight: normal'
        )
    })

    test('Calls console.warn', () => {
        logMessage('warn', 1)

        expect(console.warn).toHaveBeenCalledWith(
            '(ld-redux) %cWARN 1:%c https://github.com/Nestio/gandalf/blob/main/docs/warn.md#1',
            'font-weight: bold',
            'font-weight: normal'
        )
    })

    test('Calls console.error', () => {
        logMessage('error', 1)

        expect(console.error).toHaveBeenCalledWith(
            '(ld-redux) %cERROR 1:%c https://github.com/Nestio/gandalf/blob/main/docs/error.md#1',
            'font-weight: bold',
            'font-weight: normal'
        )
    })
})
