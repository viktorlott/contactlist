import { createSlice } from '@reduxjs/toolkit'
import get from 'lodash/get'

const initialState = {
    filter: "",
    fetched: false,
    contacts: [],
    searchResult: [],
    loading: false,
    pagination: 1,
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

const contactListSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        create: (state, action) => {
            const results = get(action, ["payload", "results"], false)
            state.fetched = true
            state.contacts = state.contacts.concat(results)
            return state
        },
        more: (state) => {
            state.pagination += 1
            return state
        },
        remove: (state) => {
            state = initialState
            return state
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        filter: (state, action) => {
            state.filter = action.payload
            state.loading = false
            if(state.filter === "") {
                state.searchResult = []
                return state
            }

            state.searchResult = state.contacts.filter(e => {
                const firstname = get(e, ["name", "first"], "") 
                const lastname = get(e, ["name", "last"], "") 
                const email = get(e, ["email"], "") 
                const phonenumber = get(e, ["phone"], "") 
                const streetname = get(e, ["location", "street", "name"], "") 
                const streetnumber = get(e, ["location", "street", "number"], "") 

                const searchStr = [firstname, lastname, email, phonenumber, streetname, streetnumber].join(" ")
                return (new RegExp(state.filter, "gi")).test(searchStr)
            })

            return state
        }
    }
})



/**
 * 
 * Here im defining selectors for redux "useSelector" hook.
 */

export const selectSearchResult = state => state.contactList.searchResult
export const selectFilter = state => state.contactList.filter
export const selectLoading = state => state.contactList.loading
export const selectFetched = state => state.contactList.fetched
export const selectPagination = state => state.contactList.pagination


export default contactListSlice