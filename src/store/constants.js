
/**
* OPERATION TYPES
*/

export const REQUEST = "REQUEST"
export const SUCCESS = "SUCCESS"
export const FAILED = "FAILED"
export const ERROR = "ERROR"

export const CREATE = "CREATE"
export const READ = "READ"
export const UPDATE = "UPDATE"
export const DELETE = "DELETE"

export const operationTypes = [REQUEST, SUCCESS, FAILED, ERROR, CREATE, READ, UPDATE, DELETE]


/**
 * ACTION TYPES
 */

export const INITIALIZE_APPLICATION = "INITIALIZE_APPLICATION"

export const CONTACT = "CONTACT"
export const CONTACTS = "CONTACTS"
export const CONTACT_LIST = "CONTACT_LIST"



export const REQUEST_CONTACT_LIST = REQUEST + "/" + CONTACT_LIST
export const CREATE_CONTACT_LIST = CREATE + "/" + CONTACT_LIST





export const actionTypes = [CONTACT, CONTACT_LIST]


/**
 * Would like to expand, but i'll keep it simple
 */


