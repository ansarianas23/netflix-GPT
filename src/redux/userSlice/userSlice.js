import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    userData: null,
    userStatus: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser: (state, action)=>{
            state.userData = action.payload;
            state.userStatus = true;
        },
        removeUser: (state, action)=>{
            state.userData = null;
            state.userStatus = false;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
