import {styled} from "styled-components";
import Main from "../components/Main.tsx";
import MainDiv from "../components/MainDiv.tsx";
import MainTitle from "../components/MainTitle.tsx";
import Title from "../components/Title.tsx";

const EmploymentInfo = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    font-size: calc(2px + 1vw);

    @media screen and (max-width: 750px) {
        margin-left: 5px;
        font-size: calc(6px + 1.2vw);
    }
`;

const PositionInfo = styled.div`
    text-align: left;
    font-size: calc(3px + 1vw);
    display: flex;
    flex-direction: column;
    margin-left: 0;
    margin-bottom: 5px;

    @media screen and (max-width: 750px) {
        font-size: calc(6px + 1.2vw);
    }
`;

export default function Employment(){
    return(
                <Main>
                    <Title Title = {"Employment"} />
                    <MainTitle> Work Experience History </MainTitle>
                    <MainDiv>
                        <EmploymentInfo>
                            <PositionInfo>
                                <h3>Boston University Fitness and Recreational Center</h3>
                                <h4><i> Fitness Attendant</i></h4>
                                <h4>December 2024 - Present</h4>
                            </PositionInfo>
                            <ul>
                                <li>Ensured a clean and safe exercise environment by conducting regular maintenance checks and
                                    adhering to safety protocols
                                </li>
                                <li>Delivered excellent customer service by assisting members with equipment, addressing
                                    inquiries, and fostering a welcoming atmosphere
                                </li>
                                <li>Developed strong interpersonal and teamwork skills through effective communication and
                                    collaboration with staff and members
                                </li>
                            </ul>
                            <br/>
                            <PositionInfo>
                            <h3>New York City Housing Authority - NYCHA</h3>
                            <h4><i>Infrastructure & Operations Intern</i></h4>
                            <h4>July 2024 - August 2024</h4>
                             </PositionInfo>
                            <ul>
                                <li>Documented configuration and deployment of 500+ network devices using industry-standard
                                    protocols to
                                    enhance network reliability and communication for operational continuity
                                </li>
                                <li>Leveraged ServiceNow, ActiveCampaign, and Siebel to tackle technical efficiency and
                                    resolution time
                                </li>
                            </ul>
                            <br/>
                            <PositionInfo>
                            <h3>PYE Education Center</h3>
                            <h4><i>STEM Project Development Intern</i></h4>
                            <h4>December 2024 - Present</h4>
                            </PositionInfo>
                            <ul>
                                <li>Designed and implemented coding-centric projects leveraging expertise in Python and C++ to
                                    simplify
                                    programming concepts for 100+ aspiring coders and integrated feedback from stakeholders for
                                    iterations
                                </li>
                                <li>Collaborated with educators to ensure the creation of diverse, engaging, and academically
                                    enriching projects
                                </li>
                            </ul>
                        </EmploymentInfo>
                    </MainDiv>
                </Main>
    );
}
