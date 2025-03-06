import {styled} from "styled-components";

const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export default MainDiv;