import { packageName } from './constants'
import type { Flags } from './types'

export const setFlags = (
    flags: Flags
): {
    type: `${typeof packageName}/set-flags`
    data: Flags
} => {
    return {
        type: `${packageName}/set-flags`,
        data: flags,
    }
}
