import { Container } from "../../components/container/Container";
import TopDestinations from "./components/topDestination/TopDestinations";
import WhatWeServe from "./components/whatWeServe/WhatWeServe";

function Home() {
    return (
        <Container>
           <WhatWeServe />
           <TopDestinations />
        </Container>
    );
}

export default Home;
