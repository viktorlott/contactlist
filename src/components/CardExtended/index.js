import styled from '@emotion/styled'
import HoverComponent from 'components/HoverComponent'


const CardContainer = styled.div`
    opacity: 0;
    transform: scale(0.95);

    @keyframes appear {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    position: relative;

    border-radius: 8px;
    color:#3d4656;    
    color: #3d4756;

    margin-bottom: 30px;
    height: 340px;


    animation: 0.2s appear ${props => 1 * 0.05}s forwards ease-in;

    &:hover .row {
        color: #3d4756;
    }

    &:hover .profile {
        transform: scale(1.1);
    }


`


const Row = styled.div`
    display: flex;

    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;

    color: #3d4756;

    transition: color 0.1s ease-in;
`



const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 150px;
    border-radius: 8px;

    color:#3d4656;    

    padding: 25px;


    @media only screen and (max-width: 400px) {
        width: 250px;  

    }

`
const MiniCard = styled.div`

    position: absolute;
    transform: translateY(75%);
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 300px;

    height: 300px;
    border-radius: 8px;
    box-shadow: 0px 8px 20px rgb(0 0 0 / 3%);
    background: white;
    color:#3d4656;    

    padding: 25px;
    padding-top: 50px;
    
    @media only screen and (max-width: 400px) {
        width: 250px;  

    }
`


const Header = styled.h4`
    margin: 0;
    font-size: 20px;
    color: #3d4756;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: absolute;
    right: 0;
    left: 0;
    margin:auto;
    top: -26px;
    text-align: center;
`

const Title = styled.h5`
    margin: 0;
    font-size: 16px;
    color: #3d4756;

`



const UserLocationIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.828 10.071L18 24l-2.828-2.929c-1.563-1.618-1.563-4.24 0-5.858a3.904 3.904 0 0 1 5.656 0c1.563 1.618 1.563 4.24 0 5.858zm-1.438-1.39c.813-.842.813-2.236 0-3.078a1.904 1.904 0 0 0-2.78 0c-.813.842-.813 2.236 0 3.079L18 21.12l1.39-1.44z"/></svg>
const LocationIcon = <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path fill="none" d="M0 0h24v24H0z"/><path fill={"currentColor"||"#ff5722"||"#fffdf7"} d="M17.084 15.812a7 7 0 1 0-10.168 0A5.996 5.996 0 0 1 12 13a5.996 5.996 0 0 1 5.084 2.812zm-8.699 1.473L12 20.899l3.615-3.614a4 4 0 0 0-7.23 0zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
const BuildingIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z"/></svg>

const Icons = type => {
    switch(type) {
        case "userlocation": return UserLocationIcon
        case "location": return LocationIcon
        case "building": return BuildingIcon
        default: return BuildingIcon
    }
}

export default function CardExtended(props) {


    const items = props.items && props.items.map((item, i) => {
        return (
            <Row key={i} className="row">
                <Title>{item.label}</Title>
                <div>{item.predicate ? item.predicate(item.value) : item.value || "-"}</div>
            </Row>
        )
    })

    return (
        <HoverComponent>
            <CardContainer selected={props.selected}>
                <MainCard>
                    <MiniCard>
                        <Header>{Icons(props.icon)}</Header>
                        {items}
                    </MiniCard>
                </MainCard>
            </CardContainer>
        </HoverComponent>
    )
}

