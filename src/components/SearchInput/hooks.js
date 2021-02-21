import {useRef, useCallback} from 'react'


/**
 * 
 * useDebouce is used when a heavy function is executed many times in a short timespan. 
 * This helps mitigate unessasary reloads and updates when a user is interacting with the view.
 * 
 * Instead of executing a function synchronously, we call setTimeout with the asynchronous API so that we dont block the main thread.
 * 
 * @param {function} func 
 * @param {number} ms 
 * @param {function} setLoading 
 *  
 * @returns {function}
 * 
 */
export function useDebounce(func, ms, setLoading) {
    const timeoutRef = useRef()

    const debounce = useCallback((...args) => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        
        setLoading && setLoading(true)

        timeoutRef.current = setTimeout(() => func(...args), ms)
    },[ms, func])

    return debounce
}