import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type";
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}
export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}
export const logout = () => {
    return {
        type: LOGOUT,
    }
} 