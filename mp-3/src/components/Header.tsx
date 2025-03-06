import { styled } from "styled-components";

const StyledHeader = styled.header`
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: rgb(204, 0, 0);
    color: white;
    
    @media screen and (max-width: 750px){
        align-items: center;
    }
`;

export default function Header() {
    return(
        <StyledHeader>
            <h1>Aaron Chen</h1>
            <p>Online Resume Portfolio
        </p></StyledHeader>
    );
}
