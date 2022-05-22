import { Types } from './../actions/themeAction';

const initialState = {
    theme: 'white'
}


export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case Types.CHANGE_COLOR:
            return {
                theme: action.payload.color
            }
        default:
            return state
    }
}