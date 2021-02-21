import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selected: null,
}


/**
 * 
 * Redux now offers a easier way to create reducers. They are called slices and have immerjs implemented to them. 
 * This means i can now "mutate" my state without breaking the core redux concept of handling immutable data.
 * 
 * Immerjs is just using the Proxy api to handle the changes to the state. This means that i dont really change the current state, instead i create a completely new object without any mutations.
 * 
 * 
 * Redux slices also offers us a easier way to create actions directly.
 * By defining functions under the attribute "reducers" we get to extract them with pre-created action types. 
 * 
 */
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        set: (state, action) => {
            state.selected = action.payload
            return state
        },
        reset: (state) => {
            state.selected = null
            return state
        }
    }
})


export const selectContact = state => state.contact.selected



export default contactSlice