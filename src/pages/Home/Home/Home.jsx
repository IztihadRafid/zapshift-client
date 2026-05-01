import Banner from "../Banner/Banner";
import ServicesCards from "../ServicesSection/ServicesCards";
import WorkingCard from "../workingCard/workingCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingCard></WorkingCard>
            <ServicesCards></ServicesCards>
        </div>
    );
};

export default Home;