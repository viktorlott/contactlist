import { put, call } from 'redux-saga/effects'
import { requestMultipleUsers } from 'api'
import ContactList from 'store/reducers/ContactList'


/**
 * 
 * This calls api.requestMutlipleUsers to fetch our contact list
 * 
 * After we fetched it we add the list to our reducer contactList
 * 
 * NOTE: result can contain an error. This would be a good place to handle it if for example you want to instead dispatch a FAIL action.
 * 
 * 
 *  response.error
 * @param {object} action 
 * @param {string} action.type 
 * @param {object} action.payload
 * @param {number} action.payload.amount
 * @param {string} action.payload.gender
 */

export function* fetchContactsSaga(action) {

   
     /**
     * @const {object}  response  - A response object
     * @const {object}  [response.error] - Optional
     * @const {object}  [response.result] - Optional
     */
    const response = yield call(requestMultipleUsers, action.payload.amount, action.payload.gender)


    yield put(ContactList.actions.create(response))


}




