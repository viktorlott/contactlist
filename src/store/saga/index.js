import { takeEvery, fork, put } from 'redux-saga/effects';
import { REQUEST_CONTACT_LIST } from 'store/constants'
import { fetchContactsSaga } from 'store/saga/Contacts'
import { fetchContactList } from 'store/actions'


/**
 * Initialize Saga - Fetch contact list with pre-set gender and amount
 *  
 * Contact list is not optimized for >=200 contacts. I should implement pagination logic when scrolling
 * 
 */
function* initializeSaga() {
    yield put(fetchContactList({ gender: "male", amount:  200 }))
}


function* rootSaga() {

    yield fork(initializeSaga)

    /**
     * LISTEN for actions with type REQUEST_CONTACT_LIST and execute forkcall fetchContactsSaga so the flow doesnt get blocked. (IF i were to add more listeners)
     */
    yield takeEvery(REQUEST_CONTACT_LIST, fetchContactsSaga)
}



export default rootSaga

