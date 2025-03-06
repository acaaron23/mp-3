import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

import PageWrapper from "./components/PageWrapper.tsx";
import Container from "./components/Container.tsx";

import Home from "./Pages/Home.tsx";
import Education from "./Pages/Education.tsx";
import Employment from "./Pages/Employment.tsx";

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
