import {styled} from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
    width: 30%;
    
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgb(204, 0, 0);
    height: 100%;
    font-size: calc(2px + 1vw);
    text-align: center;
    list-style: none;
    padding-left: 0;


    @media screen and (max-width: 750px) {
        background-color: rgb(204, 0, 0);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`;

const NavLi = styled.li`
    font-size: calc(2px + 1.5vw);
    width: 75%;
    background-color: mintcream;
    padding: 1vh;
    margin: 5vh auto;

    @media screen and (max-width: 750px) {
        background-color: mintcream;
        font-size: calc(2px + 1.2vw);
        padding: 1%;
        margin: 1% 2%;
    }
`;

const ALink = styled(Link)`
    text-decoration: none;
    color: darkred;
`;

export default function Nav(){
    return (
        <NavBar>
                <NavUl>
                    <NavLi>
                        <ALink to = {`/`} > Home </ALink>
                    </NavLi>
                    <NavLi>
                        <ALink to = {`/education`} > Education </ALink>
                    </NavLi>
                    <NavLi>
                        <ALink to = {`/employment`} > Employment </ALink>
                    </NavLi>
                    <NavLi>
                        <ALink to = {`/projects`} > Projects </ALink>
                    </NavLi>
                    <NavLi>
                        <ALink to = {`/leadership`} > Leadership </ALink>
                    </NavLi>
                    <NavLi>
                        <ALink to = {`/coding`} > Coding </ALink>
                    </NavLi>
                </NavUl>
        </NavBar>
    );
}