import axios from 'axios'


/**
 * I would like to use this instead, but im having problems with it
 */
const randomUserAPI = axios.create({
    baseURL: process.env.REACT_APP_RANDOMUSER_API_URL,
    timeout: process.env.REACT_APP_AXIOS_TIMEOUT,
    responseType: 'json',
})



/**
 *  *requestMultipleUsers* Is used for fetching the contact list from randomuser's API
 * 
 * 
 * @param {number} amount 
 * @param {string} gender 
 * 
 * @returns {Object} response
 * @returns {Object} response.?error
 * @returns {Object} response.?result
 */
export async function requestMultipleUsers(amount=100, gender="male") {
    try {
        const result = await axios.get("https://randomuser.me/api/" + "?results="+amount+"&gender="+gender)


        if(result.status !== 200) {
            return { result: {} }
        }

        return result.data

    } catch(error) {
        return { error, result: {} }
    }
}




