import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchListUsers = createAsyncThunk(
    'users/fetchListUsers',
    async (userId, thunkAPI) => {
        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        return data
    },
)

interface IUser {
    id: number;
    name: string;
    email: string;
}

const initialState: {
    listUser: IUser[]
} = {
    listUser: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchListUsers.fulfilled, (state, action) => {
            // Add user to the state array
            state.listUser = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer