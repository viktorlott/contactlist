import styled from '@emotion/styled'

import  {useCallback, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from "react-router-dom";
import contactListSlice, { selectSearchResult, selectFilter, selectLoading, selectFetched, selectPagination} from 'store/reducers/ContactList'

import Card from 'components/Card'

import SearchFilterText from 'components/SearchFilterText'
import { get } from 'lodash';

const Container = styled.div`
    margin-top: 150px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;

    margin-bottom: 200px;
`

const Text = styled.div`
    position: absolute;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const FilterButtons = styled.div`

    opacity: 0;

    @keyframes appear-filterbuttons {
    0% {
        opacity: 0;

    }
    100% {
        opacity: 1;

    }
    }
    ${props => props.hide && `
        animation: 0.3s appear-filterbuttons forwards ease-in;
    `}
    position: absolute;
    top: -80px; 
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    >span {
        padding-bottom: 3px;
    }


    >svg {
        cursor: pointer;
        transition: transform 0.2s;
        padding: 5px;
        user-select: none;
        &:hover {
            transform: scale(1.1);
        }
    }
`





const key = i => Math.random().toString(36).substring(2) + "_" + i
const AMOUNT = 20


const LoadingIcon = <div class="sk-folding-cube">
    <div class="sk-cube1 sk-cube"></div>
    <div class="sk-cube2 sk-cube"></div>
    <div class="sk-cube4 sk-cube"></div>
    <div class="sk-cube3 sk-cube"></div>
</div>

const getName = val => get(val, ["name", "first"], "") + " " + get(val, ["name", "last"], "")

const sortFunc = sort => sort === true
    ? (a, b) => getName(a) < getName(b) ? -1 : 1
    : sort === false 
        ? (a, b) => getName(b) > getName(a) ? 1 : -1
        : () => 0


/**
 * Contact list should implement infinite scrollable list, but i haven't focused on that. 
 * 
 */
export default function Contacts(props) {
    const [sort, setSort] = useState(null)
    const history =  useHistory()
    const contactList = useSelector(selectSearchResult)
    const fetched = useSelector(selectFetched)
    const filter = useSelector(selectFilter)
    const loading = useSelector(selectLoading)
    const pagination = useSelector(selectPagination)

    const dispatch = useDispatch()


    const select = useCallback(contact => void history.push("/profile/"+contact.login.username),[])
    const more = useCallback(() => void dispatch(contactListSlice.actions.more()), [])
    
    

    /**
     * Adding pagination instead of infinite scrollable list
     */
    const paging = useCallback((list, amount) => {
        const pager = []
        for(let i = 0; i < (amount * pagination); i++) {
            if(!list[i]) return pager
            pager.push(list[i])

        }
        return pager.sort(sortFunc(sort))
    }, [pagination, sort])
    
    
    const nousersfound = filter !== "" && contactList.length === 0
    
    const contactListMapFunc = useCallback((contact, i) => 
        <Card 
            key={key(i)} 
            contact={contact} 
            select={select} 
            index={i} 
            name={<SearchFilterText text={contact.name.first + " " + contact.name.last} value={filter}/>} 
            address={<SearchFilterText text={contact.location.street.name + " " + contact.location.street.number} value={filter}/>} 
            phonenumber={<SearchFilterText text={contact.phone} value={filter}/>} 
            email={<SearchFilterText text={contact.email} value={filter}/>} 
            profile={contact.picture.medium}/>, [filter])


  
    return (

        <Container>

            <FilterButtons hide={!loading && fetched && contactList.length > 0}>
                {sort === null && <svg onClick={() => setSort(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path  fill="currentColor" d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"/></svg>}
                {sort === false && <svg onClick={() => setSort(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0H24V24H0z"/><path fill="currentColor" d="M19 3l4 5h-3v12h-2V8h-3l4-5zm-5 15v2H3v-2h11zm0-7v2H3v-2h11zm-2-7v2H3V4h9z"/></svg>}
                {sort === true && <svg onClick={() => setSort(null)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0H24V24H0z"/><path fill="currentColor" d="M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z"/></svg>}
                <span>sort</span>
            </FilterButtons>
            <Text>
                {!loading && nousersfound && <h3 style={{color: "#ababab"}}>No users found</h3>}
                {(loading && fetched) && <div className={"loader"}></div>}
            </Text>

            {!loading && fetched && contactList.length > 0 && paging(contactList, AMOUNT).map(contactListMapFunc)}
            <div style={{height: 500}} />
            {!loading && contactList.length > 20 && <div style={{color: "#ababab", verticalAlign: "middle", cursor: "pointer", height: 100,margin: 50,textAlign: "center"}} onClick={more}>Load more</div>}
        </Container>
       
    )
}

