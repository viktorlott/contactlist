import styled from '@emotion/styled'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import get from 'lodash/get'
import { selectSearchResult } from 'store/reducers/ContactList'

import Card from 'components/Card'
import CardExtended from 'components/CardExtended'
import dayjs from 'dayjs'

import {
    Link,
    useParams
  } from "react-router-dom";

const Container = styled.div`
    margin-top: 150px;
    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;


    @keyframes appear-profile {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    animation: 0.3s appear-profile forwards ease-in;

`
const Navigation = styled.div`

    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
`


const LinkNavigation = styled(Link)`
        text-decoration: none;
    font-size: 24px;
    padding: 4px;
    margin-bottom: 20px;
    color: #3e4957;
    transition: transform 0.1s ease-in;
    &:hover {
        transform: scale(1.1);
    }
`


const locationFields = [{ label: "State", path: "location.state"}, { label: "City", path: "location.city"}, { label: "Address", path: ["location.street.name", "location.street.number"]}, { label: "Zipcode", path: "location.postcode"}]
const registerFields = [{ label: "Registered", path: "registered.date", predicate: (val) => dayjs(val).format("YYYY-MM-DD")}, { label: "Age", path: "registered.age"}, { label: "Gender", path: "gender"} ]



export default function Profile(props) {
    const contactList = useSelector(selectSearchResult)
    let { id } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const contact = contactList.find(e => e.login.username === id)


    if(!contact) return (
        <Container>
            <Navigation>
                <LinkNavigation to="/">Go back</LinkNavigation>
            </Navigation>
        </Container>
    )



    const name = contact.name.first + " " + contact.name.last
    const { email, picture } = contact

    const locationMapFunc = field => ({...field, value: Array.isArray(field.path) ? field.path.map(path => get(contact, path)).join(" "): get(contact, field.path)}) 
    const registerMapFunc = field => ({...field, value: Array.isArray(field.path) ? field.path.map(path => get(contact, path)).join(" "): get(contact, field.path)})

    
    return (
        <Container>
            <Navigation>
                <LinkNavigation to="/">Go back</LinkNavigation>
            </Navigation>

            <CardExtended icon="userlocation" selected={true}  items={locationFields.map(locationMapFunc)} />
            <Card select={() => {}} badge={false} selected={true} contact={contact} name={name} email={email} profile={picture.medium}/>
            <CardExtended icon="building" selected={true}  items={registerFields.map(registerMapFunc)} />
        </Container>
    )
}

