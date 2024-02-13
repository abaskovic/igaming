import { Container } from "../../components/container/Container";
import Newsletter from "./components/newsletter/Newsletter";
import TopDestinations from "./components/topDestination/TopDestinations";
import WhatWeServe from "./components/whatWeServe/WhatWeServe";

function Home() {
    return (
        <Container>
           <WhatWeServe />
           <TopDestinations />
           <Newsletter />
        </Container>
    );
}

export default Home;
