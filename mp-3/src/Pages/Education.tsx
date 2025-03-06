import {styled} from "styled-components";
import Main from "../components/Main.tsx";
import MainDiv from "../components/MainDiv.tsx";
import MainTitle from "../components/MainTitle";

const MainText = styled.p`
    text-align: center;
    font-size: calc(3px + 1vw);
`;

const EduInfo = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: calc(2px + 1.25vw);
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const BuPng = styled.img`
    display: flex;
    flex-direction: row;
    width: 30%;
`;

const FlexContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
`;

export default function Education() {
    return (
                <Main>
                    <MainTitle>Education</MainTitle>
                    <MainDiv>
                        <MainText>
                            <p> I am a third year undergraduate student at Boston University, pursuing a degree in Computer
                                Science.</p>
                        </MainText>
                    </MainDiv>
                    <EduInfo>
                        <FlexContainer>
                            <BuPng id="BU-image" src="/../public/bu.png" alt="BU Picture"/>
                            <FlexContainer2>
                                <h2> Boston University</h2>
                                <h4> Boston, MA </h4>
                                <h4> Bachelor of Arts in Computer Science</h4>
                                <h4> Anticipated Graduation Date: May 2026. </h4>
                            </FlexContainer2>
                        </FlexContainer>
                        <h3><b>Relevant Coursework:</b></h3>
                        <ul>
                            <li>CS460 - Introduction to Databases</li>
                            <li>CS440 - Introduction to AI</li>
                            <li>CS411 - Software Engineering</li>
                            <li>CS391 - Web Application Development</li>
                            <li>CS330 - Analysis of Algorithms</li>
                            <li>CS237 - Probability in Computing</li>
                            <li>CS210 - Computer Systems</li>
                            <li>CS132 - Geometric Algorithms</li>
                            <li>CS131 - Combinatoric Structures</li>
                            <li>CS112 - Introduction to Computer Science II</li>
                        </ul>
                    </EduInfo>
                </Main>
    );
}
