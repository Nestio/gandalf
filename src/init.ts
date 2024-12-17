// I think LaunchDarkly gives us the browser details in the user object
// We might not need to use ua-parser-js
import { UAParser } from 'ua-parser-js'

import type { Options, OptionsOrEmptyObject } from './types'

// Get browser details
const {
    browser: { name: browser },
    device: { type: device },
} = UAParser(navigator?.userAgent)

// Generate a unique identifier for the user
const uuid = crypto.randomUUID()

const errorUrl = 'https://github.com/Nestio/gandalf/blob/main/docs/errors.md'

export function init({
    ldClient = null,
    store = null,
    flags = null,
    user = null,
    subscribe = null,
}: OptionsOrEmptyObject<Options> = {}) {
    if (!ldClient) {
        throw new Error(`${errorUrl}#1`)
    }

    if (!store) {
        throw new Error(`${errorUrl}#1`)
    }

    if (!flags) {
        throw new Error(`${errorUrl}#1`)
    }

    return
}
