import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data:[],
}

export const AddSlice = createSlice({ 

    name:"addInputs",
    initialState,
    reducers:{

        add(state, action){
            state.data = [...state.data, action.payload]
        }

    },
})

export const { add } = AddSlice.actions

export default AddSlice.reducer