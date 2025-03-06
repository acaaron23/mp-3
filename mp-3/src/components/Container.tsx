import { styled } from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 750px){
            width: 100%;
            flex-direction: column;
            height: 100%
        }
`;

export default Container;