import ContactSlice from './Contact'
import ContactListSlice from './ContactList'


/**
 * Exporting the reducers from our slices
 */

export default { 
    contact: ContactSlice.reducer,
    contactList: ContactListSlice.reducer
}