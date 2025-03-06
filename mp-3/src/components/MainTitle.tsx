import {styled} from "styled-components";

const MainTitle = styled.h2`
    margin: 1vw;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: darkred;
    
    @media screen and (max-width: 750px) {
        text-align: center;
        color: maroon;
    }
`;

export default MainTitle;