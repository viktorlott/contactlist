
import styled from '@emotion/styled'

const Bold = styled.span`
    font-weight: 600;
    color: #585858;
`

/**
 * 
 * This is just a quick an easy way to get the "cool" effect when searching through the contact list. 
 * What it does is highlighting the search value in a paragraph or a word.
 * 
 * Using Regulare Expressions to parse the text to then stick it back together with the search values highlighed.
 * 
*/

export default function SearchFilterText(props) {

        const value = props.text
        const reg = new RegExp(`^(?<first>.*)(?<match>${props.value})(?<last>.*)$`, "i")

        const matches = value.match(reg)

        if(matches && matches.groups) {
            return <>{matches.groups.first}<Bold>{matches.groups.match}</Bold>{matches.groups.last}</>
        }

        return <>{value}</>
}