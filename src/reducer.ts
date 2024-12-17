import type { Flags as FlagsType, EmptyObj } from './types'

export function LDReducer<
    Flags extends FlagsType,
    SetFlagsAction extends ReturnType<typeof import('./actions').setFlags>,
>(
    state: Flags,
    action: SetFlagsAction
): (Flags & SetFlagsAction['data']) | EmptyObj {
    const initialState: EmptyObj = {}

    switch (action.type) {
        case 'SET_FLAGS':
            return Object.assign({}, state, action.data)

        default:
            return initialState
    }
}
