export interface DefaultFlags {
    isLDReady?: boolean
}

export interface FlagsOptions extends DefaultFlags {
    [flag: string]: boolean | string
}

export type Flags = FlagsOptions | undefined

export type EmptyObj = Record<PropertyKey, never>

export interface Options {
    ldClient: import('launchdarkly-js-client-sdk').LDClient | null
    store: import('redux').Store | null
    flags: Flags | null
    user?: Record<string, import('launchdarkly-js-client-sdk').LDContext> | null
    subscribe?: boolean | null
}

export type OptionsOrEmptyObject<T> = T | EmptyObj
