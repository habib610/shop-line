import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../Constants/UserConstants";

export const userLoginReducers = (state={}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return{loading: true}
        case USER_LOGIN_SUCCESS:
            return{loading:false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return{error: action.payload, loading: false}
        default:
            return state
    }
}