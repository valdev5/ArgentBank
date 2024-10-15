import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/auth.red';
// import { userReducer } from './reducers/user.reducer.jsx';
export const initialState = {
    status: "VOID",
    isConnected: false,
    user: {
        id: "",
        firstname: "",
        lastname: "",
        username: "",
    },
    token: "",
    error: null
}
const rootReducer = combineReducers({
   auth: authReducer,
   // user: userReducer,
})
const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})
export default store