import {styled} from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: lightblue;

    @media screen and (max-width: 750px){
        padding-top: 1px;
        width: 100%;
    }
`;

export default Main;
