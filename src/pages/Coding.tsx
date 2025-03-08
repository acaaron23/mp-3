import {styled} from "styled-components";
import Main from "../components/Main.tsx";
import MainTitle from "../components/MainTitle.tsx";
import Title from "../components/Title.tsx";

const MainText = styled.div`
    text-align: center;
    font-size: calc(2px + 1.6vw);
    color: black;
    
    
    @media screen and (max-width: 750px) {
        align-self: center;
        width: 100%;
        margin: 1vh 1vw;
        font-size: calc(3px + 3vw);
    }
`;

const CodingInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    font-size: calc(2px + 1.1vw);

    @media screen and (max-width: 750px) {
        font-size: calc(4px + 1.5vw);
    }
`;

export default function Coding() {
    return (
        <Main>
            <Title Title = {"Coding"} />
            <MainTitle> Coding Experience </MainTitle>
            <MainText><p> Listed below are my coding experiences!</p></MainText>
            <CodingInfo>
                <h3>Languages</h3>
                <ul>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Assembly</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TailwindCSS</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                </ul>
                <br/>
                <h3>Frameworks</h3>
                <ul>
                    <li>Pandas</li>
                    <li>Numpy</li>
                </ul>
                <br/>
                <h3>Platforms</h3>
                <ul>
                    <li>Docker</li>
                    <li>GitHub</li>
                    <li>Jupyter Notebook</li>
                    <li>SQLite</li>
                    <li>Visual Studio Code</li>
                    <li>MongoDB</li>
                </ul>
            </CodingInfo>
        </Main>
    );
}