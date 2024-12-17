import { test, expect } from 'bun:test'
import { toCamelCase } from './utils'

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
    expect(toCamelCase('ld-display-some-New-feature-VARIATION-12042024')).toBe(
        'ldDisplaySomeNewFeatureVariation12042024'
    )
})
