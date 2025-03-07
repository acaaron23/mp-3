import {styled} from "styled-components";
import { Link } from "react-router-dom";

import Main from "../components/Main.tsx";
import MainDiv from "../components/MainDiv.tsx";
import MainTitle from "../components/MainTitle.tsx";
import Calculator from "./Calculator.tsx"

const ProjectsInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: calc(2px + 1vw);

    @media screen and (max-width: 750px) {
        font-size: calc(6px + 1.2vw);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: darkred;
`;

export default function Projects() {
    return (
        <>
        <Main>
            <MainTitle> Projects Portfolio </MainTitle>
            <MainDiv>
                <ProjectsInfo>
                    <h3>BobaAddict- for boba lovers</h3>
                    <ul>
                        <li>Engineered a robust web application leveraging Flask, React, and SQL, incorporating OAuth
                            for secure
                            user login and authentication to monitor and analyze boba purchase behaviors and decisions
                        </li>
                        <li>Introducing a gamified approach through an engaging and dynamic interface to tracking boba
                            consumption,
                            transforming indulgent purchases into an insightful and enjoyable financial management tool
                        </li>
                    </ul>
                    <br/>
                    <h3><StyledLink to= {`https://rotreset.tech/`} target = "_blank"> RotReset - the solution to burnout </StyledLink></h3>
                    <ul>
                        <li>Pioneered an application with TailwindCSS, React, Shadcn, TypeScript, Firebase, Firestore,
                            and Figma
                        </li>
                        <li>Integrated randomized daily task generation with database functionality to provide
                            motivation alternatives,
                            reducing reliance on social media and devices to combat ‘brainrot’
                        </li>
                    </ul>
                    <br/>
                    <h3><StyledLink to= {`https://nycknot.glitch.me/`} target = "_blank" > knot - find your next go-to </StyledLink></h3>
                    <ul>
                        <li>Designed and developed a dynamic website using HTML, CSS, and JavaScript that connects NYC
                            customers with new restaurants across all five boroughs
                        </li>
                        <li>Implemented search and filtering features to help users explore curated restaurant lists
                            based on preferences
                        </li>
                    </ul>
                </ProjectsInfo>
            </MainDiv>
            <Calculator/>
        </Main>
        </>
    );
}
