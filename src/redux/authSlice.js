import {createSlice} from '@reduxjs/toolkit';
import jwtDecode from "jwt-decode";


export const initialCurrentUser = undefined
const initialState = {
    isLogin: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')).exp*1000 > Date.now() : false ,
    currentUser: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')): initialCurrentUser ,
    expiration: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')).exp*1000 :null,
    studio: undefined
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
            state.isLogin = true;
        },
        setStudio(state, action) {
            state.studio = action.payload;
        },
    },
});

export const { setCurrentUser, setStudio } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
