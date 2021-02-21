import { useCallback, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchInput from 'components/SearchInput'
import styled from '@emotion/styled'
import contactListSlice, { selectSearchResult, selectFilter, selectFetched } from 'store/reducers/ContactList'

import contactSlice, {selectContact } from 'store/reducers/Contact'



const Container = styled.div`
    display: flex;
    height: 250px;

    width: 100%;

    @keyframes appear-hero {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    animation: 0.3s appear-hero forwards ease-in;



    justify-content: center;
    align-items: center;
    position: relative;

    > img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    flex-direction: column;
    z-index: 1;
`

const TitleContainer = styled.div`
    text-align: center;
    

    margin-bottom: 50px;

    >h1 {
        font-size: 35px;
        color: #445561;
        font-weight: 900;
        margin-bottom: 0;
    }
`


const SearchBar = memo((props)  => {
    const searchResult = useSelector(selectSearchResult)
    const filter = useSelector(selectFilter)
    const contact = useSelector(selectContact)
    const fetched = useSelector(selectFetched)

    const dispatch = useDispatch()


    const onSelect = useCallback(value => {
        if(value) {
            dispatch(contactSlice.actions.set(value))
            dispatch(contactListSlice.actions.filter(value.name.first+ " " + value.name.last))
        }
    }, [])

    const setLoading = useCallback(value => dispatch(contactListSlice.actions.setLoading(value)), [])
    const onChange = useCallback(value => dispatch(contactListSlice.actions.filter(value)), [])

    if(!fetched) {
        return null
    }

    return (
        <SearchInput onChange={onChange} onSelect={onSelect} searchResult={searchResult} value={filter} contact={contact} setLoading={setLoading}/>
    )
})

export default function Hero(props) {
  

    return (
        <Container>
            <TitleContainer>
                <h1>Contact list</h1>
            </TitleContainer>
            <SearchBar />
        </Container>
    )
}