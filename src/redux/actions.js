import { constants } from '../utils/constant';

export const setupNewCompany = (payload) => {
    return {
        type: constants.ADD_COMPANY,
        payload
    }
}

export const setupNewEmployee = (payload) => {
    return {
        type: constants.ADD_EMPLOYEE,
        payload,
    }
}