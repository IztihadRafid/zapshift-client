import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import ServicesCards from "../ServicesSection/ServicesCards";
import WorkingCard from "../workingCard/workingCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingCard></WorkingCard>
            <ServicesCards></ServicesCards>
            <Brands></Brands>
        </div>
    );
};

export default Home;