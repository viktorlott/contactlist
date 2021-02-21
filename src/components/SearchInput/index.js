import { useRef,  memo } from 'react'
import styled from '@emotion/styled'

import HoverComponent from 'components/HoverComponent'
import {useDebounce} from './hooks'


const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    max-width: 628px;
    min-width: 420px;
    height: 55px;
    border-radius: 8px;
    box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
    background: white;
    opacity: 0;
    transform: scale(1);

    @keyframes appear-searchinput {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }

    ${props => !props.hide && `
        animation: 0.3s appear-searchinput forwards ease-in;
    `}

    color:#3d4656;
    z-index: 100;

    transform: translateY(90%);


    @media only screen and (max-width: 500px) {
        width: 290px;
        min-width: 290px;
        max-width: 290px;
       
    }
`

const Input = styled.input`
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 16px;
    background: #fff;
    padding: 0;
    height: 100%;
    width: 100%;

    background: transparent;
    color: currentColor;
`

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80px;

    ${props => props.color && `color: ${props.color}`}
`





const Title = styled.div`

    position: absolute;
    left: 40px; 
    right: 0;
    left: 0;
    margin: auto;
    width: 80px;
    top: -40px;

    >h2 {
        text-align: center;
        font-size: 15px;
        color: #3d4656;

        padding: 3px 3px;
        border-radius: 5px;
        font-weight: 700;
    }

`


const UserSearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9.446 9.032l1.504 1.504-1.414 1.414-1.504-1.504a4 4 0 1 1 1.414-1.414zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>




 function SearchInput(props) {
    const searchRef = useRef()


    const onChange = useDebounce(e => {
        props.onChange(e.target.value)
        props.onSelect(null)
    }, 500, props.setLoading)



    return (
        <HoverComponent>
            <Container hide={props.hide}>
                <Title></Title>
                <Icon color="#7b7b7b"><UserSearchIcon /></Icon> <Input placeholder="Search" ref={searchRef} onChange={onChange} /> 
            </Container>
        </HoverComponent>
    )
}



export default memo(SearchInput)
