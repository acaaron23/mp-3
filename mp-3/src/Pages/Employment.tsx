import {styled} from "styled-components";
import Main from "../components/Main.tsx";
import MainDiv from "../components/MainDiv.tsx";
import MainTitle from "../components/MainTitle";

const EmploymentInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: calc(1px + 1.2vw);
`;

export default function Employment(){

    return(

                <Main>
                    <MainTitle>Work Experience History</MainTitle>
                    <MainDiv>
                        <EmploymentInfo>
                            <h3>Boston University Fitness and Recreational Center</h3>
                            <h4><i> Fitness Attendant</i></h4>
                            <h4>December 2024 - Present</h4>
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
                            <h3>New York City Housing Authority - NYCHA</h3>
                            <h4><i>Infrastructure & Operations Intern</i></h4>
                            <h4>July 2024 - August 2024</h4>
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
                            <h3>PYE Education Center</h3>
                            <h4><i>STEM Project Development Intern</i></h4>
                            <h4>December 2024 - Present</h4>
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
