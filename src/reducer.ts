import { packageName } from './constants'
import type { Flags as FlagsType, EmptyObj } from './types'

export const reducer = <
    Flags extends FlagsType,
    SetFlagsAction extends ReturnType<typeof import('./actions').setFlags>,
>(
    state: Flags,
    action: SetFlagsAction
): (Flags & SetFlagsAction['data']) | EmptyObj => {
    const initialState: EmptyObj = {}

    if (action.type === `${packageName}/set-flags`) {
        return {
            ...state,
            ...action.data,
        }
    }

    return initialState
}
