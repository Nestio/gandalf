<!-- omit in toc -->
## Table of Contents
- [`Error 1`: Missing `ldClient`, `store`, or `flags`](#error-1-missing-ldclient-store-or-flags)
- [`Error 2`: Missing `subscribe`](#error-2-missing-subscribe)

## `Error 1`: Missing `ldClient`, `store`, or `flags`
<a id="1"></a>

`ldClient` is an initialized LaunchDarkly client.

```ts
const ldClient = new LaunchDarklyClient('API-KEY-HERE', {
    clientId: '123',
})
```

`store` is a Redux store.
`flags` is a Record of flags:

```ts
const flags = {
    flag1: true,
    flag2: false,
    flag3: 'multivariant-one',
}
```

## `Error 2`: Missing `subscribe`
