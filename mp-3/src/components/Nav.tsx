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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: darkred;
`;

export default function Nav(){
    return (
        <NavBar>
                <NavUl>
                    <NavLi>
                        <StyledLink to = {`/`} > Home </StyledLink>
                    </NavLi>
                    <NavLi>
                        <StyledLink to = {`/education`} > Education </StyledLink>
                    </NavLi>
                    <NavLi>
                        <StyledLink to = {`/employment`} > Employment </StyledLink>
                    </NavLi>
                    <NavLi>
                        <StyledLink to = {`/projects`} > Projects </StyledLink>
                    </NavLi>
                    <NavLi>
                        <StyledLink to = {`/leadership`} > Leadership </StyledLink>
                    </NavLi>
                    <NavLi>
                        <StyledLink to = {`/coding`} > Coding </StyledLink>
                    </NavLi>
                </NavUl>
        </NavBar>
    );
}