import {styled} from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: lightblue;
    height: 100vh;

    @media screen and (max-width: 750px){
        width: 100%;
        height: 100vh;
    }
`;

export default Main;
