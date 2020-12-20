import { DECREMENT, INCREMENT } from "./types"

export function rootReducer(state, action) {
    // нужно понимать, какой именно state приходит

    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }

    return state
}