import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth.red.jsx';
import { userReducer } from './user.red.jsx';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
 })
 
 const store = configureStore({
     reducer: rootReducer,
     devTools: true 
 })
 
 export default store