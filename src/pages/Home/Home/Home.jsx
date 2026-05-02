import Banner from "../Banner/Banner";
import MarchantSection from "../BeMarchant/MarchantSection";
import Brands from "../Brands/Brands";
import FAQ from "../Faq/Faq";
import CustomerFeedback from "../FeedBack/CustomerFeedback";
import HeroSection from "../HeroSection/HeroSection";
import ServicesCards from "../ServicesSection/ServicesCards";
import WorkingCard from "../workingCard/workingCard";

const reviewsPromise = fetch('/data/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingCard></WorkingCard>
            <ServicesCards></ServicesCards>
            <Brands></Brands>
            <HeroSection></HeroSection>
            <MarchantSection></MarchantSection>
            <CustomerFeedback reviewsPromise={reviewsPromise}></CustomerFeedback>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;