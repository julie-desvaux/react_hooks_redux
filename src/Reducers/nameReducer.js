const nameReducer = (state = { name: '' }, action) => {
    switch(action.type) {
        case 'UPDATE' :
            return {
                ...state,
                name: action.payload
            }
        default: return state
    }
}

export default nameReducer