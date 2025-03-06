import {styled} from "styled-components";
import Main from "../components/Main.tsx";
import MainDiv from "../components/MainDiv.tsx";
import MainTitle from "../components/MainTitle.tsx";

const MainP= styled.div`
    margin: 0 auto;
    font-size: calc(3px + 1.25vw);
`;

const ImgDiv = styled.div`
    width: 40%;
    margin: 10vh 1vw;

    @media screen and (max-width: 750px){
        margin: 1vh auto;
    }
`;

const ProfileImage = styled.img`
    max-width: 100%;

    @media screen and (max-width: 750px){
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
`;

const MainText = styled.div`
    width: 50%;
    margin: 2vh 2vw;
    font-size: calc(3px + 1.5vw);

    @media screen and (max-width: 750px){
        align-self: center;
        width: 100%;
        margin: 1vh 1vw;
        font-size: calc(6px + 2vw);
    }
`;

const Welcome = styled.p`
    margin: 2vh;
    font-size: calc(4px + 1.5vw);

    @media screen and (max-width: 750px){
        font-size: calc(8px + 1.5vw);
    }
`;

export default function Home(){
    return (
                <Main>
                    <MainP>
                        <MainTitle>Home</MainTitle>
                        <MainDiv>
                            <ImgDiv>
                                <ProfileImage src= {"/ac_pfp.jpeg"} alt = {"Picture of Aaron Chen"} />
                            </ImgDiv>
                            <MainText>
                                <p>
                                    Hi, I'm Aaron! I am currently an undergraduate student at Boston University, pursuing a degree
                                    in Computer Science.
                                    I am actively seeking internship opportunities to gain practical experience and further develop
                                    my capabilities.
                                    By collaborating with mentors and professors, I aim to become a well-rounded and impactful
                                    professional in the tech industry.
                                </p>
                            </MainText>
                        </MainDiv>
                        <Welcome>
                            <p>Welcome to my website! I'm hoping you learn more about me and my work!</p>
                        </Welcome>
                    </MainP>
                </Main>
    );
}
