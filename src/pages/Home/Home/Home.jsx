import Banner from "../Banner/Banner";
import MarchantSection from "../BeMarchant/MarchantSection";
import Brands from "../Brands/Brands";
import HeroSection from "../HeroSection/HeroSection";
import ServicesCards from "../ServicesSection/ServicesCards";
import WorkingCard from "../workingCard/workingCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingCard></WorkingCard>
            <ServicesCards></ServicesCards>
            <Brands></Brands>
            <HeroSection></HeroSection>
            <MarchantSection></MarchantSection>
        </div>
    );
};

export default Home;