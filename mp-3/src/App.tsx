import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

import PageWrapper from "./components/PageWrapper.tsx";
import Container from "./components/Container.tsx";

import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Employment from "./pages/Employment.tsx";
import Projects from "./pages/Projects.tsx";
import Leadership from "./pages/Leadership.tsx";
import Coding from "./pages/Coding.tsx";

import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

function Root() {
    return (
        <PageWrapper>
            <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/education" element = {<Education />} />
                    <Route path = "/employment" element = {<Employment />} />
                    <Route path = "/projects" element = {<Projects/>} />
                    <Route path = "/leadership" element = {<Leadership/>} />
                    <Route path = "/coding" element = {<Coding/>} />
                </Routes>
            </Container>
            <Footer/>
        </PageWrapper>
    );
}

const router = createBrowserRouter([{path: "*", Component: Root}])

export default function App() {
    return <RouterProvider router = {router} />;
}
