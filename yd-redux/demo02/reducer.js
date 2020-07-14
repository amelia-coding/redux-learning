export default function reducer(state, action) {
    switch (action.type) {
        case "INCRMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECERMENT":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}