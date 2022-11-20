import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name:'loginReducer',
    initialState:{
        email:'',
        firstName:'',
        lastName:'',
        uid:'',
    },
    reducers:{
        add(state, action){
            console.log('reducer', action)
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        edit(state, action){},
        del(state, action){},
    }
})

export const {add} = loginSlice.actions
export default loginSlice.reducer