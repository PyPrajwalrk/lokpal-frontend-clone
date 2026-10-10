import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ComplaintSection from "../components/ComplaintSection/ComplaintSection";
import HowToFileComplaint from "../components/HowToFileComplaint/HowToFileComplaint";
import LatestInformation from "../components/LatestInformation/LatestInformation";
import Calendar from "../components/Calendar/Calendar";
import AboutLokpal from "../components/AboutLokpal/AboutLokpal";
import Members from "../components/Members/Members";
import Footer from "../components/Footer/Footer";
import "./Home.css";

function Home() {
    return (
        <div className="home-page">

            <TopBar />

            <Header />

            <Navbar />

            <Hero />

            <ComplaintSection />

            <div className="home-content-grid">

                <HowToFileComplaint />

                <LatestInformation />

                <Calendar />

                <AboutLokpal />

            </div>

            <Members />

            <Footer />

        </div>
    );
}

export default Home;