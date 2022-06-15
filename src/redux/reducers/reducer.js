import { constants } from "../../utils/constant";

const initialState = {
    loader: false,
    list: []
}

export const companyData = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case constants.LOADER:
            return {
                ...state, loader: payload
            }
        case constants.ADD_COMPANY:
            return {
                ...state, list: [...state.list, payload]
            }
        case constants.ADD_EMPLOYEE:
            return {
                ...state, list: payload
            }
        default: return state
    }
}