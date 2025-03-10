import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ReturnFooter = styled.footer`
    text-align: center;
    background-color: lightgray;
    width: 100%;
    font-size: calc(2px + 1.25vw);
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: darkred;
`;

export default function Footer(){
    return (
        <ReturnFooter>
            <p>All Rights Reserved by Aaron Chen <StyledLink to = {``}> Credits </StyledLink> &copy; </p>
        </ReturnFooter>
    );
}