import type { Flags } from './types'

export const setFlags = (
    flags: Flags
): {
    type: 'SET_FLAGS'
    data: Flags
} => {
    return {
        type: 'SET_FLAGS',
        data: flags,
    }
}
