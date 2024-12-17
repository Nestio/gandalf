// I think LaunchDarkly gives us the browser details in the user object
// We might not need to use ua-parser-js
// import { UAParser } from 'ua-parser-js'

import { logError } from './utils'

import type { Options, OptionsOrEmptyObject } from './types'

// Get browser details
// const {
//     browser: { name: browser },
//     device: { type: device },
// } = UAParser(navigator?.userAgent)

// Generate a unique identifier for the user
// const uuid = crypto.randomUUID()

export const init = (options: OptionsOrEmptyObject<Options>) => {
    const { ldClient = null, store = null } = options || {}

    if (!ldClient) {
        return logError(1)
    }

    if (!store) {
        return logError(1)
    }

    return
}
