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
    animation: 0.2s appear ${props => props.index * 0.05}s forwards ease-in;
    position: relative;

    border-radius: 8px;
    color:#3d4656;    

    margin-bottom: 40px;
    height: 340px;


    

    &:hover .row {
        color: #3d4756;
    }

    &:hover .profile {
        transform: scale(1.1);
    }

    ${props => props.selected && "opacity: 1!important;"}

`




const Row = styled.div`
    display: flex;

    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 10px 0;

    color: #a9aeb5;

    transition: color 0.1s ease-in;


    >div {
        word-break: break-all;
        text-align: center;
    }
`

const MainCard = styled.div`
    display: flex;

    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 360px;
    height: 150px;
    border-radius: 8px;

    color:#3d4656;    
    
    @media only screen and (max-width: 400px) {
        width: 220px;

       
    }
 
    
    padding: 25px;

`
const MiniCard = styled.div`

    position: absolute;
    transform: translateY(75%);
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 300px;
    height: 320px;

    @media only screen and (max-width: 400px) {
        width: 240px;  
        height: 320px;
    }

    border-radius: 8px;
    box-shadow: 0px 8px 20px rgb(0 0 0 / 3%);
    background: white;
    color:#3d4656;    

    padding: 25px;
    padding-top: 30px;

`



const Profile = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: black;
    position: absolute;
    top: -45px;

    transition: transform 0.2s ease-in;
    box-shadow: 0px 8px 20px rgb(0 0 0 / 8%);
`

const Title = styled.h5`
    margin: 0;
    font-size: 16px;
    color: #3d4756;

`









export default function Card(props) {
    const svgStyle = {display: props.badge === false ? "none" : "block",position: "absolute", right: -20, bottom: -20, padding: 8, background: "#ff7c82", borderRadius: "50%"}
    return (
        <HoverComponent>


        
        <CardContainer selected={props.selected} index={props.index} onClick={() => props.select(props.contact)}  >

            <MainCard>
                <MiniCard>

                    <Row><Profile className="profile" src={props.profile || "https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"}/></Row>

                    <Row className="row">
                        <Title>Name</Title>
                        <div>{props.name || "Viktor Lott"}</div>
                    </Row>
                    <Row className="row">
                        <Title>Email</Title>
                        <div>{props.email || "viktor.lott@hotmail.com"}</div>
                    </Row>
                    <Row className="row">
                        <Title>Phonenumber</Title>
                        <div>{props.phonenumber || "0761027072"}</div>
                    </Row>

                    <Row className="row">
                        <Title>Address</Title>
                        <div>{props.address || "Vitemöllegatan 4b"}</div>
                    </Row>
                    <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="55" height="55"><path fill="none" d="M0 0h24v24H0z"/><path  fill="#fffdf7" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527z"/></svg>
                    
                </MiniCard>
            </MainCard>



        </CardContainer>
        </HoverComponent>
    )
}

