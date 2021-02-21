import { REQUEST_CONTACT_LIST } from 'store/constants'


/**
 * Action for async call to grab user list
 * @param {object} payload 
 * @param {string} payload.gender
 * @param {string} payload.amount
 */
export function fetchContactList(payload) {
    return {
        type: REQUEST_CONTACT_LIST,
        payload
    }
}

