import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null

}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducer: {
        setUserData: (state, action) => {
            state.userData = action.payload
            console.log('>>Set User data Reducer Function Called', state, action)
        },
        removeUserData: (state) => {
            state.userData = null
        }
    }
})

export const {
    setUserData,
    removeUserData
} = userSlice.actions

export default userSlice.reducer