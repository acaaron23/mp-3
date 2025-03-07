import {styled} from "styled-components";
import Main from "../components/Main.tsx";
import MainTitle from "../components/MainTitle.tsx";

const BuCSC = styled.div`
    display: flex;
    flex-direction: row;
`;

const BUCSCLogo = styled.img`
    width: 25%;
    margin-left: 5vh;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 750px) {
        width: 30%;
    }
`;

const BUCSCInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: calc(3px + 1.25vw);
    padding: 6vh 1vw;

    @media screen and (max-width: 750px) {
        font-size: calc(8px + 1.25vw);
    }
`;

const LeadershipInfo = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    font-size: calc(2px + 1.25vw);
    padding: 3vh 3vw;

    @media screen and (max-width: 750px) {
        font-size: calc(8px + 1.25vw);
    }
`;

export default function Projects() {
    return (
        <Main>
            <MainTitle> Leadership Roles </MainTitle>
                <BuCSC>
                    <BUCSCLogo src = {"/bucsc.png"} alt={"BU CSC Logo"}/>
                    <BUCSCInfo>
                        <h3><b>BU Computer Science Club</b></h3>
                        <h4><i>Computer Science Advisor</i></h4>
                        <h4>January 2025 - Present</h4>
                    </BUCSCInfo>
                </BuCSC>
                <LeadershipInfo>
                        <ul>
                            <li>Facilitated mentorship opportunities for underclassmen to navigate academic pathways,
                                select appropriate
                                courses, and explore extracurricular opportunities
                            </li>
                            <li>Enhanced community engagement through workshops and collaborative environments to foster
                                a community
                            </li>
                            <li>Led meetings to help students learn about CS opportunities and work on exclusive
                                projects led by CSC
                            </li>
                        </ul>
                </LeadershipInfo>
        </Main>
    );
}